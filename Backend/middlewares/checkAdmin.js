const checkAdmin = (req, res, next) => {
  const userRole = req.user.role;

  if (userRole === "Admin") {
    next(); // User is an Admin
  } else {
    res.status(403).json({ message: "Permission denied" });
  }
};

export default checkAdmin;
