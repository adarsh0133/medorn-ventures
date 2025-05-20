let express = require("express");
const { createUser, updateUser, allUsers } = require("../controllers/userControllers");
let router = express.Router();

router.route("/allUsers").get(allUsers);

router.route("/create").post(createUser);

router.route("/update").post(updateUser)

module.exports = router;