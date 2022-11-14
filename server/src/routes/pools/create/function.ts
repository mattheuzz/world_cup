import { CreatePoolsBody } from "./schema"
import { v4 as uuidv4 } from 'uuid'
import { prisma } from "../../../../prisma/connection"

export const createPools = async (request: any, reply: any) => {
    const { title } = CreatePoolsBody.parse(request.body)
    const code = uuidv4()
  await prisma.pool.create({
    data:{
      title,
      code, 
    },
  })
  console.log(title, code)
  return reply.status('201').send(code)
}