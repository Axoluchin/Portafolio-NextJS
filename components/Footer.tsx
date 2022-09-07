import { Row, Spacer, Text, useTheme, Link } from '@nextui-org/react'
import { IoStar } from 'react-icons/io5'

const Footer = () => {
 const { theme } = useTheme()
 return (
  <Row
   align="center"
   justify="space-between"
   style={{
    height: '6rem',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: theme?.colors.neutralBorder.value,
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: theme?.colors.backgroundContrast.value,
   }}
  >
   <Text
    style={{
     textAlign: 'center',
    }}
   >
    Damián Hernández Huchín 2022
   </Text>
   <Link href='#header' color='inherit'>
    <IoStar size={32}/>
   </Link>
   <div
    style={{
     display: 'flex',
     flexDirection: 'row',
    }}
   >
    <Link color="inherit" href="https://twitter.com/DamianHuchin" target="_blank">
     Twitter
    </Link>
    <Spacer x={1} />
    <Link color="inherit" href="https://github.com/Axoluchin" target="_blank">
     Github
    </Link>
    <Spacer x={1} />
    <Link color="inherit" href="https://www.linkedin.com/in/damianhuchin/" target="_blank">
     LinkedIn
    </Link>
   </div>
  </Row>
 )
}

export default Footer
