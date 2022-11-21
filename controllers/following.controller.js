const {followingService} = require("../services");

module.exports = {
    getMaxFollowing: async (req, res, next) => {
        try {
            const users = await followingService.findMaxFollowing();

            const responseUsers = users.map(user => {
                return {
                    id: user.id,
                    first_name: user.first_name,
                    gender: user.gender,
                    friends: user._count.friends,
                }
            });

            res.json({
                data: responseUsers,
            });
        } catch (e) {
            next(e);
        }
    },

    getNotFollowing: async (req, res, next) => {
        try {
            const users = await followingService.findNotFollowing();

            const responseUsers = users.filter(user => user.friends.length === 0);

            res.json({
                data: responseUsers,
            });
        } catch (e) {
            next(e);
        }
    },
}

