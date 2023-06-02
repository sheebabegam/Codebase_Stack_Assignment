const User = require('../model/userSchema');

const verifyToken_api = require('../helper/auth')

// get the one user data by id
const getUserById = async (_, { id }) => {

    let user = await User.findById(id);

    return user;
}

//get the all users
const getUsers = async (_, __, context) => {
    // enable only you need secure your date from others

    // const status = await verifyToken_api(context.token);

    // if (status) {
    //     console.log("status", status)

    //     let users = User.find();
    //     return users;
    // }

    let users = User.find();
    return users;

}

module.exports = { getUserById, getUsers  }