const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '1d';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = {username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    authMiddleware: function({ req }){
        // allow for the tokens to be sent through request 
        let token = req.body.token || req.query.token || req.headers.authorization;

        // Bearer from '<tokenvalue>'
        if ( req.headers.authorization) {
            token = token 
            .split(' ')
            .pop()
            .trim(); 
        }

        // handleing no token request 
        if (!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data; 
        } catch {
            console.log('This Token is Invalid!!')
        }

        return req; 
    }
};