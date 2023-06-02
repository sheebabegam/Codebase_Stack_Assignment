const { AuthenticationError } = require('apollo-server-express');

const jwt = require('jsonwebtoken')

const verifyToken_api = (accessToken, res) => {

    return new Promise((resolve, reject) => {

        if (!accessToken) {

            reject(new AuthenticationError('Auth token is not supplied'));
        }

        else {

            const token = accessToken.split(' ')[1];

            const validToken = jwt.verify(token, "testcase");

            if (!validToken) {

                reject(new AuthenticationError('Not a valid token'));

            } else {

                resolve({ success: true, token, user: validToken })

            }
        }
    });
};

module.exports = verifyToken_api 