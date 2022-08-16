import { Text } from '@nextui-org/react'
import { IoLogoReact, IoLogoFirebase} from 'react-icons/io5'

const LenguajeChip = ({ lengaje }: { lengaje: string }) => {
 const setColor = () => {
  switch (lengaje) {
   case 'RN':
    return '#459CB4'
   case 'FB':
    return '#D4A824'
   case 'TS':
    return '#3178c6'
   case 'RD':
    return '#764abc'
   default:
    return 'transparent'
  }
 }

 const setName = () => {
  switch (lengaje) {
   case 'RN':
    return 'React Native'
   case 'FB':
    return 'Firebase'
   case 'TS':
    return 'Typescript'
   case 'RD':
    return 'Redux'
   default:
    return lengaje
  }
 }

 const setIcon = () => {
  switch (lengaje) {
   case 'RN':
    return <IoLogoReact/>
   case 'FB':
    return <IoLogoFirebase/>
   case 'TS':
    return ''
   case 'RD':
    return ''
   default:
    return <></>
  }
 }

 return (
  <Text
   style={{
    background: setColor(),
    borderRadius: 8,
    padding: '0.01rem 0.5rem',
    margin: 8,
   }}
   b
  >
    {setIcon()}{' '}
   {setName()}
  </Text>
 )
}

export default LenguajeChip
