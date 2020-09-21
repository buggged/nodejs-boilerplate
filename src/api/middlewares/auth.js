const jwt = require("jwt-then");

module.exports = (...roles) => {
  return async (req, res, next) => {
    try {
      if (!req.headers.authorization) throw "No authorization";
      let token = req.headers.authorization.split(" ")[1];
      token = token.trim();
      const payload = await jwt.verify(token, process.env.SECRET);

      // Check in all the roles that needed to be passed by user
      let hasAccess = roles.length === 0;
      roles.forEach((item) => {
        if (payload.role === item) hasAccess = true;
      });
      if (!hasAccess) throw "No authorization";
      // end role check

      req.payload = payload;
      next();
    } catch (err) {
      res.status(403).json({
        message: "You are not allowed to perform this request 😊😊",
      });
    }
  };
};

/*
Usage 

auth()                            -- Allow all users
auth("user")                      -- Allow only users with role=user
auth("user", "admin", "super")    -- Allow only users with role=user or admin or super
auth("admin", "super", ....)      -- Allow only user with role=admin or super or ...

*/
