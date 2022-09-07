import { Card, Text, Link, Grid, Row } from '@nextui-org/react'
import { IoLogoGithub } from 'react-icons/io5'

import LenguajeChip from './LenguajeChip'
import { project } from '../utils/types'

const CardProject = ({ project }: { project: project }) => (
 <Card
  isPressable
  isHoverable
  variant="bordered"
  style={{
   width: '300px',
   margin: '1.5rem 0.5rem'
  }}
 >
  <Card.Image src={project.image} height={150} />
  <Card.Header>
   <Grid.Container gap={1} justify="space-between">
    <Text h3>{project.name}</Text>
   </Grid.Container>
  </Card.Header>
  <Card.Divider />
  <Card.Body>
   <Row justify="center" wrap='wrap' style={{marginBottom: 16}}>
    {project.tech.map(leng => (
     <LenguajeChip key={leng} lengaje={leng} />
    ))}
   </Row>
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
    <Link href={project.webPage} target='_blank' color="primary">
     <Text color="primary">Sitio Web
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
