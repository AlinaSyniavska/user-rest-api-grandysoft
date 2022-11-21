const Joi = require("joi");

const {orderTypeEnum, orderByEnum} = require("../constants");

module.exports = {
    userValidator: Joi.object({
        order_by: Joi.string().trim().valid(...Object.values(orderByEnum)),
        order_type: Joi.string().trim().valid(...Object.values(orderTypeEnum)),
    }),
};
