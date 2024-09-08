
const authController = require('../helpers/Auth');

module.exports = (app) => {
  const router = app.distributor("/user")
  router.post('/login', authController.login);
  return router;
};