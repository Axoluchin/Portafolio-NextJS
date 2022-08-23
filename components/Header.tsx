import Link from 'next/link'
import { Text, Grid, Link as NextUILink, useTheme } from '@nextui-org/react'
import {
 IoHomeOutline,
 IoVideocamOutline,
 IoFolderOutline,
 IoBookOutline,
} from 'react-icons/io5'

const Header = () => {
 const { theme } = useTheme()
 return (
  <Grid.Container
   gap={2}
   justify="space-between"
   style={{
    backgroundColor: theme?.colors.backgroundContrast.value,
    borderColor: theme?.colors.border.value,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    position: 'fixed',
    top: 0,
    zIndex: 1
   }}
  >
   <Grid xs={6}>
    <Link href="/">
     <NextUILink>
      <Text
       h3
       css={{
        textGradient: '75deg, $green600 0%, $blue600 50%, $purple600 100%',
       }}
       className='NameHead'
      >
       Damián Hernández Huchín
      </Text>
     </NextUILink>
    </Link>
   </Grid>
   <Grid xs={6}>
    <Grid.Container justify="space-evenly" alignContent="center">
     <Link href="/">
      <NextUILink color={'text'} style={{ alignItems: 'center' }}>
       <IoHomeOutline />
       <Text h5>Inicio</Text>
      </NextUILink>
     </Link>
     <Link href="/Portafolio">
      <NextUILink color={'text'} style={{ alignItems: 'center' }}>
       <IoFolderOutline />
       <Text h5>Portafolio</Text>
      </NextUILink>
     </Link>
     <Link href="/Blog">
      <NextUILink color={'text'} style={{ alignItems: 'center' }}>
       <IoBookOutline />
       <Text h5>Blog</Text>
      </NextUILink>
     </Link>
     {/* <Link href="/Videos">
      <NextUILink color={'text'} style={{ alignItems: 'center' }}>
       <IoVideocamOutline />
       <Text h5>Videos</Text>
      </NextUILink>
     </Link> */}
    </Grid.Container>
   </Grid>
  </Grid.Container>
 )
}

export default Header
