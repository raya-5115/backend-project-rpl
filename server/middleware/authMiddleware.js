import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied. No token provided" });
    }
    
    const token = authHeader.split(" ")[1];
    
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
    
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};