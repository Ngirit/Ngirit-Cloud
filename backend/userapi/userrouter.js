const {createUser,login,getUsers,updateUsers,deleteUser } = require("./usercontroller");
const router = require("express").Router();
//const { checkToken } = require("../../auth/token_validation");


router.get("/", getUsers);
router.post("/", createUser);
router.post("/login", login);
router.patch("/", updateUsers);
router.delete("/", deleteUser);

module.exports = router;