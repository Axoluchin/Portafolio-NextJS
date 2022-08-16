import { Card, Text, Link } from '@nextui-org/react'
import { IoLogoGithub } from "react-icons/io5";
import { project } from '../utils/types';

const CardProject = ({project}:{project:project}) => (
 <Card isPressable isHoverable variant="bordered">
  <Card.Header>
   <Text h3>{project.name}</Text>
  </Card.Header>
  <Card.Divider />
  <Card.Body>
   <Text b>
    {project.resume}
    </Text>
  </Card.Body>
  <Card.Divider />
  <Card.Footer>
   {project.githubRepo && <Link href={project.githubRepo}>
    <Text color="primary"><IoLogoGithub/> Github Repo</Text>
   </Link>}
  </Card.Footer>
 </Card>
)

export default CardProject
