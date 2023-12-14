const CircuitBreaker = require('opossum');
const {userService} = require("../services");

const options = {
    timeout: 1000, // 3000 - If our function takes longer than 3 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 30000 // After 30 seconds, try again.
};

module.exports = {
    getAll: async (req, res, next) => {

        const breaker = new CircuitBreaker(await userService.findAll, options);
        breaker.fire(req.query)
            .then(users => {
                console.log('1')
                res.json({
                    data: users,
                });
            })
            .catch( e => {
                console.error('2')
                next(e);
            });
    },

/*    getAll: async (req, res, next) => {
        try {
            const users = await userService.findAll(req.query);

            res.json({
                data: users,
            });
        } catch (e) {
            next(e);
        }
    },*/

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
