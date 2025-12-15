import jwt from 'jsonwebtoken';

export const isAuthenticated = (req, res, next) =>{
    const token = req.cookies.accessToken;

     if (!token) return res.status(401).json({ message: "Not authenticated" });

     try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
     } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
     }
}