interface IHomeProps {
  count: number
}
export default function Home(props: IHomeProps) {
  return <h1>Count: {props.count}</h1>
}

export const getServerProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count")
  console.log(response)
  const data = await response.json()

  console.log(data)

  return {
    props: {
      count: data.count,
    }
  }
}
