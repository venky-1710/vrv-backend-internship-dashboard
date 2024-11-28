//Giving access to correct roles
const authorizeRoles = (...allowedRoles) =>{
    return (req,res,next) => {
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message: "You do not have permission to access this"});
        }
        next();
    };
};
module.exports = authorizeRoles;

