import { useEffect, useState } from 'react'
import { Grid, Text, Link } from '@nextui-org/react'

import useIsMounted from '../hooks/useIsMounted'
import CardProject from '../components/CardProject'
import SubTitle from '../components/SubTitle'
import { getProjects } from '../utils/firebase'
import { project } from '../utils/types'
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

const Portafolio = () => {
 const IsMounted = useIsMounted()
 const [projectList, setProjectList] = useState<project[]>([])

 useEffect(() => {
  const getDBData = async () => {
   setProjectList(await getProjects())
  }
  getDBData()
 }, [])

 if (!IsMounted) {
  return null
 }

 return (
  <div>
   <SubTitle text="Experiencia" />
   <Grid.Container gap={2} justify="center">
    {projectList.map(data => (
     <Grid key={data.id} xs={6} md={3}>
      <CardProject project={data} />
     </Grid>
    ))}
   </Grid.Container>
   <SubTitle text="Skills" />
   <SubTitle text="Contacto" />
   <Grid.Container gap={4} justify="space-around">
    <Grid>
     <Link href="https://www.linkedin.com/in/damianhuchin/" target="_blank">
      <Text h2 color="$blue500">
       <IoLogoLinkedin /> Linkedin
      </Text>
     </Link>
    </Grid>
    <Grid>
     <Link href="https://github.com/Axoluchin" target="_blank">
      <Text h2 color="$gray800">
       <IoLogoGithub /> Github
      </Text>
     </Link>
    </Grid>
    <Grid>
     <Link href='https://twitter.com/DamianHuchin' target='_blank'>
      <Text h2 color="$blue700">
       <IoLogoTwitter /> Twitter
      </Text>
     </Link>
    </Grid>
   </Grid.Container>
  </div>
 )
}

export default Portafolio
