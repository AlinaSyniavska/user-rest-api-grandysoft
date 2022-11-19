const {usersNameEnum, genderEnum, baseConstant} = require("../constants");

module.exports = {
    generateUserName: () => {
        return usersNameEnum.USERS_NAME[Math.floor(Math.random() * usersNameEnum.USERS_NAME.length)];
    },

    generateUserGender: () => {
        const values = Object.values(genderEnum);

        return values[Math.floor(Math.random() * values.length)];
    },

    generateSubscription: (id, users) => {
        const mySet = new Set();

        const filterUsers = users.filter(user => user.id !== id);

        for (let i = 0; i < Math.floor(Math.random() * baseConstant.MAX_SUBSCRIPTION + 1); i++) {
            mySet.add({id: filterUsers[Math.floor(Math.random() * filterUsers.length)].id})
        }

        return [...mySet];
    },
}

