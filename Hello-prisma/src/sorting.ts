import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
    const insertsUser = await prisma.user.createMany({
       data:[
        {
            name: "js",
            email: "ts@email.com"
        },
        {
            name: "rain",
            email: "rain@email.com"
        },
        {
            name: "tut tut",
            email: "ts@email.com"
        },
        
        
        
       ]
    });
    console.log(insertsUser);
}

main();