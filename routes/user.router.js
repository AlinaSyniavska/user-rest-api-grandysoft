const userRouter = require('express').Router();

const {userController} = require("../controllers");
const {commonMiddleware, userMiddleware} = require("../middlewares");
const {queryValidator} = require("../validators");

userRouter.get('/',
    userController.getAll);

userRouter.get('/:id/friends',
    commonMiddleware.isDataValid(queryValidator.userValidator, 'query'),
    commonMiddleware.isIdValid,
    userMiddleware.isUserPresent,
    userController.getById);

module.exports = userRouter;

