import { useEffect, useState } from 'react'
import { Grid } from '@nextui-org/react'

import useIsMounted from '../hooks/useIsMounted'
import CardProject from '../components/CardProject'
import SubTitle from '../components/SubTitle'
import { getProjects } from '../utils/firebase'
import { project } from '../utils/types'

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
  </div>
 )
}

export default Portafolio
