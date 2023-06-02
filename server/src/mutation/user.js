const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken'); // Encrypt the user data like id and email via jwt token

const User = require('../../src/model/userSchema')

const { ApolloServer, gql, ApolloError } = require('apollo-server-express');

const { GraphQLError } = require('graphql');

const createUser = async (_, { input }) => {

    const { name, email, password } = input;

    const exist = await User.findOne({ email });

    if (exist) {

        const error = new GraphQLError('User already exists');

        error.extensions = {

            code: 'USER_ALREADY_EXISTS',
            http: {
                status: 400,
            },
        };

        throw error;

    }

    const user = new User({
        name,
        email,
        password,
    });

    const savedUser = await user.save();

    return savedUser;

};

const updateUser = async (_, { id, input }) => {

    let exist = await User.findById(id);

    if (exist) {

        const updatedUser = await User.findByIdAndUpdate(id, input, { new: true });

        return updatedUser;

    }

    const error = new GraphQLError('User not found with this id');

    error.extensions = {
        code: 'BAD_USER_INPUT',
        http: {
            status: 403,
            headers: new Map([
                ['some-header', 'it was bad'],
                ['another-header', 'seriously'],
            ]),
        },
    };

    throw error;
};

const deleteUser = async (_, { id }) => {

    const exist = await User.findById(id);

    if (!exist) {

        const error = new GraphQLError('User not found with this id');

        error.extensions = {

            code: 'BAD_USER_INPUT',
            http: {
                status: 403,
                headers: new Map([
                    ['some-header', 'it was bad'],
                    ['another-header', 'seriously'],
                ]),
            },
        };

        throw error;

    }

    await User.findByIdAndDelete(id);

    return {
        status: "Success",
        message: "Deleted Successfully"
    };
}

const login = async (_, { input }) => {

    const { email, password } = input;

    const Emailexist = await User.findOne({ email: email });

    if (!Emailexist) {

        const error = new GraphQLError('Invalid Username and Password');

        error.extensions = {
            code: 'BAD_USER_INPUT',
            http: {
                status: 403,
                headers: new Map([
                    ['some-header', 'it was bad'],
                    ['another-header', 'seriously'],
                ]),
            },
        };

        throw error;

    } else {

        let validPassword = await bcrypt.compare(password, Emailexist.password);

        if (!validPassword) {

            const error = new GraphQLError('Invalid Username and Password');

            error.extensions = {
                code: 'BAD_USER_INPUT',
                http: {
                    status: 403,
                    headers: new Map([
                        ['some-header', 'it was bad'],
                        ['another-header', 'seriously'],
                    ]),
                },
            };
            
            throw error;

        } else {

            const token = jwt.sign({ id: Emailexist._id, email: Emailexist.email }, "testcase", { expiresIn: '6h' });

            return {
                message: "Login Successfully",
                token
            }
        }
    }

}

module.exports = { createUser, updateUser, deleteUser, login }