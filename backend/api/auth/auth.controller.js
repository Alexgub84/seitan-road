const authService = require("./auth.service");

async function login(req, res) {
  const { userName, password } = req.body;
  try {
    const user = await authService.login(userName, password);
    req.session.user = user;
    res.json(user);
  } catch (err) {
    res.status(401).send({ error: err });
  }
}

async function logout(req, res) {
  try {
    req.session.destroy();
    res.send({ message: "logged out successfully" });
    req.session.user = user;
  } catch (err) {
    res.status(500).send({ error: err });
  }
}

module.exports = {
  login,
  logout,
};
