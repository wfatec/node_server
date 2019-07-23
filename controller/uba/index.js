const accessHandler = require("./access");
const paramHandler = require("./param");
const homeHandler = require("./home");
const conversionHandler = require("./conversion");
const businessHandler = require("./business");

module.exports = {
  access: accessHandler,
  param: paramHandler,
  home: homeHandler,
  conversion: conversionHandler,
  business: businessHandler
};
