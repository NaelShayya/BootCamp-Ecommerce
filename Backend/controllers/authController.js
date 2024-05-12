import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Country from "../models/Country.js";
import nodemailer from "nodemailer";
import crypto from "crypto";

const register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      country_name,
      title,
      gender,
      birthdate,
      role = "User",
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const selectedCountry = await Country.findOne({ country_name });
    if (!selectedCountry) {
      return res.status(400).json({ message: "Invalid country" });
    }

    const newUser = new User({
      first_name,
      last_name,
      email,
      password: await bcrypt.hash(password, 10),
      country: selectedCountry._id,
      currency_id: selectedCountry.currency._id,
      title,
      gender,
      birthdate,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const userDto = {
      userId: user._id,
      fullName: `${user.first_name} ${user.last_name}`,
      email: user.email,
      role: user.role,
      country: user.country,
      token,
    };
    console.log("Token:", token);

    res.status(200).json({ user: userDto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a new random password
    const newPassword = crypto.randomBytes(8).toString("hex");

    // Update user's password in the database
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    // Send the new password to the user's email
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "email@example.com",
        pass: "password",
      },
    });

    await transporter.sendMail({
      from: "email@example.com",
      to: user.email,
      subject: "New Password",
      html: `<p>Your new password is: ${newPassword}</p>`,
    });

    res.status(200).json({ message: "New password sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { register, login, forgotPassword };
