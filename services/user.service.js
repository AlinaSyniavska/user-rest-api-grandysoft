const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    findAll: () => {
        // order_by=id&order_type=desc      order_type=asc
        // const {order_by = 'id', order_type = 'desc', ...otherFilters} = query;

        return prisma.user.findMany();

    },

/*    findOne: (query = {}) => {
        return User.findOne(params);
    },*/
}
