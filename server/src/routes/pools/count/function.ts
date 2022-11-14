import { prisma } from "../../../../prisma/connection"

export const countPools = async() => {
  const count = await prisma.pool.count()

  return {count}
}