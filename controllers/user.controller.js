const {userService} = require("../services");

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const users = await userService.findAll(req.query);

            res.json({
                data: users,
            });
        } catch (e) {
            next(e);
        }
    },

    getById: async (req, res, next) => {
        try {
            const {user} = req;

            const idUser = user.id;
            const idFriends = [];
            let bothFollowing;

            user.friends.forEach(single => idFriends.push(single.id));

            bothFollowing = await userService.findFollowing(idUser, idFriends);

            const responseUser = {
                id: user.id,
                first_name: user.first_name,
                gender: user.gender,
                bothFollowing,
            };

            res.json(responseUser);
        } catch (e) {
            next(e);
        }
    },
};
