import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log("Received Token:", token);

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      throw new Error("Authentication failed");
    }

    req.user = {
      userId: decodedToken.userId,
      role: decodedToken.role,
    };

    console.log("Decoded Token:", decodedToken);
    console.log("User ID from Token:", req.user.userId);

    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default authMiddleware;
