const jwt = require('jsonwebtoken');

const userInfo = require('../models/userInfo');

const auth = (render) => {
    return async (req, res, next) => {
        try {
            const token = req.cookies.auth;
            const verifyUser = jwt.verify(token,process.env.SECRET_KEY);
            console.log(verifyUser);
            
            const user  = await userInfo.findOne({_id: verifyUser._id});
            
            console.log(user);
    
            if(render == 'sign-up' || render == 'sign-in') {
                res.status(200).redirect('/profile');
            }

            req.token = token;
            req.user = user;

            next();
        } catch (err) {
            if(render == 'sign-up' || render == 'sign-in') {
                next();
            } else {
                res.redirect('/sign-in');
            }
            console.log(err);
        }
    }
}



module.exports = auth;