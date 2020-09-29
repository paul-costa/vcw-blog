const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        //verify token
        const decodedToken = jwt.verify(
            token, 
            process.env.JWT_KEY,
        );

        //Add decoded Token to req to hand it further with NEXT
        req.userData = {
            email: decodedToken.email,
            userId: decodedToken.userId,
        };

        next();
    } catch (err) {
        res.status(401).json({error: {message: 'You are not authenticated'}});
    }
}
