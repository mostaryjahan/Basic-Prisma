import {PrismaClient} from "../generated/prisma"

const prisma = new PrismaClient()


async function main() {
// const result = await prisma.user.create({
//    data: {
//     name: "monica",
//     email: "monica@email.com"
//    }
// })
// console.log(result)


// const userData = await prisma.user.findMany({
//    where: {
//       id: 3
//    }
// })
// console.log(userData)

// const findUserById = await prisma.user.findUnique({
//    where: {
//       id: 3
//    }
// })
// console.log(findUserById)


// update
const update = await prisma.user.update({
   where: {
      id: 1
   },
   data: {
      name: "rain"
   }
})

console.log(update);















 }


main()