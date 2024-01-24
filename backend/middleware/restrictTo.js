const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return console.log("Not Allowed");
    }
    next();
  };
};

export default restrictTo;
