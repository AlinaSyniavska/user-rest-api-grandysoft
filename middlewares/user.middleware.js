const {userService} = require("../services");
const {CustomError} = require("../errors");

module.exports = {
    isUserPresent: async (req, res, next) => {
        try {
            const {id} = req.params;

            const user = await userService.findOne({id: id}, req.query);

            if(!user){
                return next(new CustomError(`User with id ${id} not found`, 404));
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },
};
