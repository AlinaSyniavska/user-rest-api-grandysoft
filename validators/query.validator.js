const Joi = require("joi");

const {orderTypeEnum} = require("../constants");

module.exports = {
    userValidator: Joi.object({
        order_by: Joi.string().trim(),
        order_type: Joi.string().trim().valid(...Object.values(orderTypeEnum)),
    }),
};
