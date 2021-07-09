const Router = require("koa-router");
const { verifyUser } = require("../middleware/verifyUser");

const router = new Router({
  prefix: "/api",
});

module.exports = router.routes();
