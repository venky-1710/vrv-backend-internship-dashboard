const jwt = require("jsonwebtoken");
const { isTokenBlacklisted } = require("../controllers/authController");
//verifying users based on token
const verifyToken = (req,res, next) =>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({message: "No token, authorization denied"});
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode
            console.log("The decoded user is:",req.user);
            next();
        }
        catch(err){
            res.status(400).json({message: "Token is not valid"});
        }
    } else{
        return res.status(401).json({message: "No token, authorization denied"});
    }
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization token is missing or invalid" });
    }

    const token = authHeader.split(" ")[1];

    // Check if the token is blacklisted
    if (isTokenBlacklisted(token)) {
        return res.status(403).json({ message: "Token is invalidated. Please login again." });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded payload to the request
        req.token = token; // Attach the token for further use (e.g., logout)
        next();
    } catch (error) {
        res.status(403).json({ message: "Token is invalid or expired", error: error.message });
    }
};
module.exports = {verifyToken, authenticateToken};

