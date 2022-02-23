import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
    const add = await prisma.groceries.create({
        data: {
          Title: 'Banana',
          Description: 'African sweet banana',
          Price: 0.7,
          Amount: 1000,
          ShopId: 1,
        },
      })

      const add2 = await prisma.groceries.create({
        data: {
          Title: 'Pork',
          Description: 'For work',
          Price: 2,
          Amount: 100,
          ShopId: 1,
        },
      })
      const add3 = await prisma.groceries.create({
        data: {
          Title: 'Strawbery',
          Description: 'And nothing to get hung about Strawberry fields forever',
          Price: 2.3,
          Amount: 200,
          ShopId: 2,
        },
      })
  const boston = await prisma.shops.create({
    data: {
        Name: "BOSTONBIGSHOP",
      },
  })
  const boston2 = await prisma.shops.create({
    data: {
        Name: "GreatBritainGrocery",
      },
    })
  console.log({ add, add2, add3, boston, boston2 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })