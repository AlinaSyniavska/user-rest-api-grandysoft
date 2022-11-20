const notFollowingRouter = require("express").Router();

const {followingController} = require("../controllers");

notFollowingRouter.get('/',
    followingController.getNotFollowing);

module.exports = notFollowingRouter;



