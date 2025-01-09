import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {

    const token = req.header('X-Authorization');
    console.log('From authmiddleware:', token)
    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        req.isAuthenticated = true;
        next();
    } catch (err) {
        console.log(err.message)
        //! TODO: something else
        res.end();
    }
} 