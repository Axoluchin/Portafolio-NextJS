import { Card, Text, Link, Spacer, Grid } from '@nextui-org/react'
import { IoLogoGithub, IoGlobeOutline } from 'react-icons/io5'

import LenguajeChip from './LenguajeChip'
import { project } from '../utils/types'

const CardProject = ({ project }: { project: project }) => (
 <Card
  isPressable
  isHoverable
  variant="bordered"
  style={{
   minWidth: '30%',
  }}
 >
  <Card.Image src={project.image} height={150} />
  <Card.Header>
   <Grid.Container justify="space-between">
    <Text h3>{project.name}</Text>
   </Grid.Container>
  </Card.Header>
  <Card.Divider />
  <Card.Body>
   <Grid.Container justify="flex-start" alignContent="center" style={{marginBottom: 8}}>
    {project.tech.map(leng => (
     <LenguajeChip key={leng} lengaje={leng} />
    ))}
   </Grid.Container>
   <Card.Divider />
   <Text b>{project.resume}</Text>
   <Text
    style={{
     textAlign: 'right',
     fontSize: 10,
    }}
   >
    {project.date}
   </Text>
  </Card.Body>
  <Card.Divider />
  <Card.Footer>
   {project.webPage && (
    <Link href={project.webPage}>
     <Text color="primary">
      <IoGlobeOutline /> Sitio Web
     </Text>
    </Link>
   )}
   {project.githubRepo && (
    <Link href={project.githubRepo}>
     <Text color="primary">
      <IoLogoGithub /> Github Repo
     </Text>
    </Link>
   )}
  </Card.Footer>
 </Card>
)

export default CardProject
