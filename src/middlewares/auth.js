const adminAuth = (req, res, next) => {
  console.log("Admin auth isgetting checked!!");

  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Access");
  } else {
    next();
  }
};

module.exports = { adminAuth };
