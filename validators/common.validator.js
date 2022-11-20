const Joi = require("joi");

module.exports = {
    commonDataValidator: Joi.string().max(100).trim(true),
}