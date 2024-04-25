import User from "../models/User.js";

const getAllUsers = async (req, res) => {
  try {
    // Check if the authenticated user is admin
    console.log(req.isAuthenticated());

    const users = await User.find({ role: "User" });
    const userDtos = users.map(createUserDto);
    res.status(200).json(userDtos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const createUserDto = (user) => {
  const userDto = {
    userId: user._id,
    fullName: `${user.first_name} ${user.last_name}`,
    email: user.email,
    gender: user.gender,
    birthdate: user.birthdate,
    country: user.country,
    role: user.role,
    created_at: user.created_at,
    modified_at: user.modified_at,
  };
  return userDto;
};

const getUserByID = async (req, res) => {
  try {
    const userID = req.body.userID;
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }
    const userDto = createUserDto(user);

    res.status(200).json({ user: userDto });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the user ID is passed as a route parameter

    const updates = req.body;
    const allowedUpdates = [
      "first_name",
      "last_name",
      "email",
      "gender",
      "birthdate",
      "country",
    ];
    const isValidUpdate = Object.keys(updates).every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidUpdate) {
      return res.status(400).json({ error: "Invalid update." });
    }

    const user = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const lockUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    await User.findByIdAndUpdate(userId, { status: "locked" });

    res.status(200).json({ message: "User locked successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const unlockUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    await User.findByIdAndUpdate(userId, { status: "unlocked" });

    res.status(200).json({ message: "User unlocked successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export { getAllUsers, getUserByID, updateUser, lockUser, unlockUser };
