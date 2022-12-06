import { Heading, VStack } from "native-base"
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export const New = () => {
  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header title="Criar novo bolão" showBackButton />
      <VStack mt={8} mx={5} alignItems="center">

        <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
          Crie seu próprio bolão da copa e compartilhe entre amigos
        </Heading>

        <Input mb={2} placeholder="Qual o nome do seu bolão?" />

        <Button title="BOLÃO" />
      </VStack>
    </VStack>
  )
}