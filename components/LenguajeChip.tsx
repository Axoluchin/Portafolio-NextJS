import { Row, Text } from '@nextui-org/react'
import { IoLogoReact, IoLogoFirebase } from 'react-icons/io5'
import { SiRedux, SiTypescript, SiGraphql, SiExpo } from 'react-icons/si'

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
   case 'Expo':
    return '#737373'
   case 'GQL':
    return '#E10098'
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
   case 'GQL':
    return 'GraphQL'
   default:
    return lengaje
  }
 }

 const setIcon = () => {
  switch (lengaje) {
   case 'RN':
    return <IoLogoReact />
   case 'FB':
    return <IoLogoFirebase />
   case 'TS':
    return <SiTypescript />
   case 'RD':
    return <SiRedux />
   case 'GQL':
    return <SiGraphql />
   case 'Expo':
    return <SiExpo />
   default:
    return <></>
  }
 }

 return (
  <Row
   style={{
    outlineStyle: 'solid',
    outlineWidth: 2,
    outlineColor: setColor(),
    borderRadius: 8,
    padding: '0.05rem 0.3rem',
    margin: 6,
    width: 'auto',
   }}
   align='center'
  >
    {setIcon()}
    <Text b style={{ marginLeft: 8 }}>
     {setName()}
    </Text>
  </Row>
 )
}

export default LenguajeChip
