import { useEffect, useState } from 'react'

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
   {projectList.map(data => (
    <CardProject key={data.id} project={data} />
   ))}
  </div>
 )
}

export default Portafolio
