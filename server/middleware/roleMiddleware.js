export const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized - No user found" });
    }
    
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: "Forbidden - You don't have permission to access this resource" 
      });
    }
    
    next();
  };
};