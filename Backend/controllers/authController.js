import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Country from "../models/Country.js";

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

    res.status(200).json({ user: userDto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { register, login };
