const User = require("../models/userModel.js");

exports.createUser = async (req, res, next) => {
  const { name, email, skills } = req.body;

  const user = await User.create({
    name,
    email,
    skills,
  });

  res.json({ success: true, user: user });
};

exports.updateUser = async (req, res, next) => {
  try {
    let { id, name, email, skills } = req.body;
    let user = await User.findById(id);
    if (!user) {
      return console.error("user  not Found");
    }

    user.name = name;
    user.email = email;
    user.skills = skills;
    await user.save();
    res.json({ success: true, message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.allUsers = async (req, res, next) => {
  try {
    const users = await User.find().exec();
    console.log(users);
    res.status(200).json({
      success: true,
      userlength: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
