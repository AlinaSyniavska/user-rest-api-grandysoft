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
            res.json(user);
        } catch (e) {
            next(e);
        }
    },
};
