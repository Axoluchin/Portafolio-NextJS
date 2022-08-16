import { Card, Text, Link } from '@nextui-org/react'

const CardProject = () => (
 <Card isPressable isHoverable variant="bordered">
  <Card.Header>
   <Text h3>Proyecto Chido</Text>
  </Card.Header>
  <Card.Divider />
  <Card.Body>
   <Text b>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, corrupti
    illo quod, exercitationem libero quia expedita quas impedit doloremque
   </Text>
  </Card.Body>
  <Card.Divider />
  <Card.Footer>
   <Link>
    <Text color="primary">Ver mas</Text>
   </Link>
   <Link>
    <Text color="primary">Github Repo</Text>
   </Link>
  </Card.Footer>
 </Card>
)

export default CardProject
