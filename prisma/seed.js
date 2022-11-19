const {PrismaClient} = require('@prisma/client');

const {baseConstant} = require("../constants");
const {seedHelper} = require("../helpers");

const prisma = new PrismaClient();

async function main() {
    for (let i = 0; i < baseConstant.QUANTITY; i++) {
        const randomName = seedHelper.generateUserName();

        const newUser = await prisma.user.upsert({
            where: {id: i + 1},
            update: {},
            create: {
                first_name: `${randomName}`,
                gender: seedHelper.generateUserGender(),
                friends: {
                    create: []
                },
            },
        })
    }
    const users = await prisma.user.findMany();

    users.map(user => {
        prisma.user.update({
            where: {id: user.id},
            data: {friends: { connect: seedHelper.generateSubscription(user.id, users)}},
        }).then(data => console.log(data));
    });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })