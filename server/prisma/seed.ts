import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
 const user = await prisma.user.create({
  data: {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    avatarUrl: 'https://github.com/mattheuzz.png'
  }
 })
 const pool = await prisma.pool.create({
  data:{
    title: 'exemple pool',
    code: 'Bol123',
    ownerId: user.id,

    participant: {
      create: {
        userId: user.id
      }
    }
  }
 })
  await prisma.game.create({
    data: {
      date: '2022-11-10T01:05:36.084Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR',
    }
  })
 await prisma.game.create({
  data: {
    date: '2022-11-11T01:05:36.084Z',
    firstTeamCountryCode: 'AR',
    secondTeamCountryCode: 'BR',

    guess: {
      create: {
        firstTeamPoints: 3,
        secondTeamPoints: 1,

        participant: {
          connect: {
            userId_poolId: {
              userId: user.id,
              poolId: pool.id
            }
          }
        }
      }
    }
  }
 })
}

main()
