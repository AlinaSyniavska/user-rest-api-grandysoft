const userRouter = require('express').Router();

const {userController} = require("../controllers");

userRouter.get('/',
    userController.getAll);

/*
userRouter.delete('/:id',
    commonMiddleware.isDataValid(queryValidator.userValidator, 'query'),
    commonMiddleware.isIdValid,
    userMiddleware.isUserPresent,
    userController.delete);*/

module.exports = userRouter;

