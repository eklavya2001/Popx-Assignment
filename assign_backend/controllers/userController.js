const userModel = require("../model/userModel");

async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      return res.status(400).json({ msg: "all fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      // If user exists but not verified, delete the unverified record
      if (!existingUser.isVerified) {
        await userModel.deleteOne({ email });
      } else {
        return res.status(400).json({ msg: "Email already registered" });
      }
    }

    // const hashedPassword = userModel.hashPassword(password);
    const newUser = await userModel.create({
      email,
      password,
    });

    return res.status(201).json({
      msg: "otp generated successfully",
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "internal server error" });
  }
}
module.exports = {
  handleUserLogin,
};
