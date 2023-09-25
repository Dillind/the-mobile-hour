export default function access_control(allowedRoles) {
  return function (req, res, next) {
    if (req.session.user != null) {
      if (
        allowedRoles.some(
          (allowedRole) => allowedRole === req.session.user.accessRole
        )
      ) {
        next();
      } else {
        res.render("status.ejs", {
          status: "Access Denied",
          message: "Invalid access role",
        });
      }
    } else {
      res.render("status.ejs", {
        status: "Access Denied",
        message: "Not logged in",
      });
    }
  };
}
