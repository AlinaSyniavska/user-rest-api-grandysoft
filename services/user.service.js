const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    findAll: () => {
        return prisma.user.findMany({
            include: { friends: true }
        });

    },

    findOne: (params = {}, query = {}) => {
        const {id: idUser} = params;
        const {order_by = 'id', order_type = 'desc'} = query;

        return prisma.user.findUnique({
            where: {
                id: Number(idUser),
            },
            include: {
                friends: {
                    orderBy: {
                        [order_by]: order_type,
                    },
                },
            },
        })
    },

     findFollowing: async (id, ids) => {
        let bothFollowing = [];

        for (const item of ids) {
            const result = await prisma.user.findUnique({
                where: {
                    id: item,
                },
                include: {
                    friends: {
                        where: {
                            id: id,
                        },
                    },
                },
            })

            if (result.friends.length) {
                bothFollowing.push(result);
            }
        }

        return bothFollowing;
    },
}
