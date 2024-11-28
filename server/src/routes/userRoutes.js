const express = require("express");
const {verifyToken} = require("../middlewares/authMiddleware");
const authroizeRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

//only admins
router.get("/admin",verifyToken,authroizeRoles("admin"),(req,res) => {
    res.json({message: "welcome Admin"});
}
);

//both admin and manager
router.get("/manager",verifyToken,authroizeRoles("admin","manager"),(req,res) => {
    res.json({message: "welcome Manager"});
}
);

// all can access
router.get("/user",verifyToken,authroizeRoles("admin","manager","user"),(req,res) => {
    res.json({message: "welcome user"});
}
);

module.exports = router;