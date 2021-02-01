const bcrypt = require("bcrypt");
const userService = require("../user/user.service");
const logger = require("../../services/logger.service");

async function login(userName, password) {
  logger.debug(`auth.service - login with userName: ${userName}`);
  if (!userName || !password)
    return Promise.reject("userName and password are required!");
  const user = await userService.getByUsername(userName);
  if (!user) return Promise.reject("Invalid userName or password");
  const match = await bcrypt.compare(password, user.password);
  if (!match) return Promise.reject("Invalid userName or password");
  delete user.password;
  return user;
}

module.exports = {
  login,
};
