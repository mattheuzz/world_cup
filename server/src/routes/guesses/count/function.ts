import { prisma } from "../../../../prisma/connection"

export const countGuess = async() => {
  const count = await prisma.guess.count()

  return {count}
}