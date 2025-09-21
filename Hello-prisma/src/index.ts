import {PrismaClient} from "../generated/prisma"

const prisma = new PrismaClient()


async function main() {
// const result = await prisma.user.create({
//    data: {
//     name: "ts",
//     email: "ts@email.com"
//    }
// })
// console.log(result)


// const userData = await prisma.user.findMany()
// console.log(userData)

// const findUserById = await prisma.user.findUnique({
//    where: {
//       id: 3
//    }
// })
// console.log(findUserById)


// update
// const update = await prisma.user.update({
//    where: {
//       id: 1
//    },
//    data: {
//       name: "rain"
//    }
// })

// console.log(update);


// const updateMany = await prisma.user.updateManyAndReturn({
//    where: {
//       profilePhoto: null
//    },
//    data: {
//     profilePhoto: "https://www.example.com/profile-photo.jpg"
//    }
// })

// console.log(updateMany, "updateMany");


// delete 
// const deleteUser = await prisma.user.delete({
//    where: {
//       id: 1
//    }
// })
// console.log(deleteUser);

// const deleteUserMany = await prisma.user.deleteMany({
//    where: {
//       id: {
//          gt: 5
//       }
//    }
// })
// console.log(deleteUserMany);









 }


main()