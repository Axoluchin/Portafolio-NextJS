import { Text, Grid, Link } from '@nextui-org/react'
import { IoHomeOutline, IoVideocamOutline, IoFolderOutline, IoBookOutline } from 'react-icons/io5'

const Header = () => (
 <Grid.Container
  gap={2}
  justify="space-between"
  style={{
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginBottom: 8
    }}
 >
  <Grid xs={6}>
   <Text h3>Damián Hernández Huchín</Text>
  </Grid>
  <Grid xs={6}>
   <Grid.Container justify="space-evenly" alignContent='center'>
    <Link color={'text'} href="/" style={{alignItems: 'center'}}>
      <IoHomeOutline/>
     <Text h5>Inicio</Text>
    </Link>
    <Link color={'text'} href="/Portafolio" style={{alignItems: 'center'}}>
      <IoFolderOutline/>
     <Text h5>Portafolio</Text>
    </Link>
    <Link color={'text'} href="/Blog" style={{alignItems: 'center'}}>
     <IoBookOutline/>
     <Text h5>Blog</Text>
    </Link>
    <Link color={'text'} href="/" style={{alignItems: 'center'}}>
     <IoVideocamOutline/>
     <Text h5>Videos</Text>
    </Link>
   </Grid.Container>
  </Grid>
 </Grid.Container>
)

export default Header
