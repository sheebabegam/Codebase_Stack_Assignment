const mongoose = require('mongoose');

const bcrypt = require('bcrypt'); //encrypt the user passwoed

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: { type: String },

    email: { type: String, unique: true, required: true },

    password: { type: String, required: true },

}, { timestamps: true });

// encrypt the password before save from the database

userSchema.pre('save', async function (next) {
    
    const user = this;

    if (!user.isModified('password')) {

        return next();
    }

    try {

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(user.password, salt);

        user.password = hashedPassword;

        next()

    } catch (error) {

        return next(error);

    }
})

module.exports = mongoose.model('users', userSchema)