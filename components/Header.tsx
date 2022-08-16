import { Text, Grid, Link } from '@nextui-org/react'

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
    <Link color={'text'} href="/">
     <Text h5>Inicio</Text>
    </Link>
    <Link color={'text'} href="/Portafolio">
     <Text h5>Portafolio</Text>
    </Link>
    <Link color={'text'} href="/Blog">
     <Text h5>Blog</Text>
    </Link>
    <Link color={'text'} href="/">
     <Text h5>Videos</Text>
    </Link>
   </Grid.Container>
  </Grid>
 </Grid.Container>
)

export default Header
