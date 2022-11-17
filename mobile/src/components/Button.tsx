import { Button as NativeBaseButton, Text, IButtonProps } from 'native-base'

interface IProps extends IButtonProps {
  title: string
  type?: 'PRIMARY' | 'SECONDARY'
}

export const Button = ({ title, type = 'PRIMARY', ...rest }: IProps) => {
  return (
    <NativeBaseButton 
    w='full'
    h={14}
    rounded='sm'
    fontSize='md'
    textTransform='uppercase'
    bg={type === 'SECONDARY'? 'red.500' : 'yellow.300'}
    _pressed={{
      bg: type === 'SECONDARY'? 'red.300' : 'yellow.100'
    }}
    _loading={{
      _spinner: { color: 'black' }
    }}

    {...rest}
    >
      <Text
      fontSize='sm'
      fontFamily='heading'
      color={type==='SECONDARY'? 'white' : 'black'}
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}