import { Text, Navbar, Link } from '@nextui-org/react'
import { IoHomeOutline, IoFolderOutline, IoBookOutline } from 'react-icons/io5'

const Header = () => {
 return (
  <Navbar isBordered isCompact shouldHideOnScroll variant="sticky">
   <Navbar.Brand>
      <Text
       h3
       css={{
        textGradient: '75deg, $green600 0%, $blue600 50%, $purple600 100%',
       }}
       className="NameHead"
       style={{
        margin: 0,
       }}
      >
       Damián Hernández Huchín
      </Text>
   </Navbar.Brand>
   <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
    <Navbar.Link href="/">
     <IoHomeOutline />
     Inicio
    </Navbar.Link>
    <Navbar.Link href="/Portafolio">
     <IoFolderOutline /> Portafolio
    </Navbar.Link>
    <Navbar.Link href="/Blog">
     <IoBookOutline /> Blog
    </Navbar.Link>
   </Navbar.Content>
   <Navbar.Toggle aria-label="toggle navigation" showIn={'xs'} />
   <Navbar.Collapse showIn={'xs'}>
    <Navbar.CollapseItem>
     <Link color="inherit" href="/">
      <IoHomeOutline />
      Inicio
     </Link>
    </Navbar.CollapseItem>
    <Navbar.CollapseItem>
     <Link color="inherit" href="/Portafolio">
      <IoFolderOutline />
      Portafolio
     </Link>
    </Navbar.CollapseItem>
    <Navbar.CollapseItem>
     <Link color="inherit" href="/Blog">
      <IoBookOutline /> Blog
     </Link>
    </Navbar.CollapseItem>
   </Navbar.Collapse>
  </Navbar>
 )
}

export default Header
