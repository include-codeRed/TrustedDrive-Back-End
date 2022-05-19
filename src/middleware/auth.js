const jwt = require('jsonwebtoken');

const userInfoClient = require('../models/userInfoClient');
const userInfoEmployee = require('../models/userInfoEmployee');

const auth = (render) => {
    return async (req, res, next) => {
        try {
            const token = req.cookies.auth;
            const verifyUser = jwt.verify(token,process.env.SECRET_KEY);

            
            const userClient  = await userInfoClient.findOne({_id: verifyUser._id});
            const userEmployee = await userInfoEmployee.findOne({_id: verifyUser._id});


            if(render == 'sign-up-client' || render == 'sign-in' || render == 'join-us') {
                res.status(200).redirect('/profile');
            }

            if(userClient) {
                if(render == 'employee') {
                    res.status(200).redirect('/repair-your-vehicle');
                }
                req.token = token;
                req.user = userClient;
                req.type = "employee";
                next();
            } else if(userEmployee) {
                if(render == 'client') {
                    res.status(200).redirect('/dashboard');
                }
                req.token = token;
                req.user = userEmployee;
                req.type = "client";
                console.log("working");
                next();
            }

            
        } catch (err) {
            if(render == 'sign-up-client' || render == 'sign-in' || render == 'join-us' || render == 'join-us') {
                next();
            } else {
                res.redirect('/sign-in');
            }
            console.log(err);
        }
    }
}



module.exports = auth;