const maxFollowingRouter = require("express").Router();

const {followingController} = require("../controllers");

maxFollowingRouter.get('/',
    followingController.getMaxFollowing);

module.exports = maxFollowingRouter;

