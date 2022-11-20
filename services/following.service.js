const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    findMaxFollowing: () => {
        return prisma.user.findMany({
            include: {
                _count: {
                    select: { friends: true },
                },
            },
            orderBy: {
                friends: {
                    _count: 'desc',
                },
            },
            take: 5,
        })
    },



/*    const userCount = await prisma.user.count({
        where: {
            profileViews: {
                gte: 100,
            },
        },
    })*/

}
