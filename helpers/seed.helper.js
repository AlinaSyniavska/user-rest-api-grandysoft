const {usersNameEnum, genderEnum} = require("../constants");

module.exports = {
    generateUserName: () => {
        return usersNameEnum.USERS_NAME[Math.floor(Math.random() * usersNameEnum.USERS_NAME.length)];
    },

    generateUserGender: () => {
        const values = Object.values(genderEnum);

        return values[Math.floor(Math.random() * values.length)];
    },
}

