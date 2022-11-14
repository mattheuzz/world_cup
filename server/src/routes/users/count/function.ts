import { prisma } from "../../../../prisma/connection"

export const countUsers = async() => {
  const count = await prisma.user.count()

  return {count}
}