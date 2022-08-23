import Head from 'next/head'
import { Grid, Text, Link } from '@nextui-org/react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

import CardProject from '../components/CardProject'
import CardCode from '../components/CardCode'
import SubTitle from '../components/SubTitle'
import MiniTitle from '../components/MiniTittle'
import { getProjects, getCodeLenguajes, getTools } from '../utils/firebase'
import { project, codeLenguaje } from '../utils/types'
import imgBg from '../public/images/MacCover.webp'

const Portafolio = ({
 projectList,
 codeList,
 toolList,
}: {
 projectList: project[]
 codeList: codeLenguaje[]
 toolList: codeLenguaje[]
}) => {
 return (
  <div>
    <Head>
        <title>Damián Huchín Portafolio</title>
    </Head>
   <div
    style={{
     backgroundImage: `url(${imgBg.src})`,
     height: '400px',
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     padding: '100px 0',
     marginTop: '2rem',
    }}
   >
    <Text
     h1
     style={{
      textAlign: 'center',
      textShadow: '5px 0px 0px #444444'
     }}
    >
     Damián Hernández Huchín
    </Text>
    <Text
     h3
     style={{
        textAlign: 'center',
        textShadow: '-4px 0px 0px #444444'
       }}
    >
     Programador Mobile y Frontend
    </Text>
   </div>
   <SubTitle text="Experiencia" />
   <Grid.Container gap={2} justify="center">
    {projectList.map(data => (
     <Grid key={data.id} xs={6} md={3}>
      <CardProject project={data} />
     </Grid>
    ))}
   </Grid.Container>
   <SubTitle text="Skills" />
   <MiniTitle title="Lenguajes y Frameworks" position="left" />
   <Grid.Container gap={1} justify="center">
    {codeList.map(data => (
     <Grid key={data.id}>
      <CardCode data={data} />
     </Grid>
    ))}
   </Grid.Container>
   <MiniTitle title="Herramientas" position="right" />
   <Grid.Container gap={1} justify="center">
    {toolList.map(data => (
     <Grid key={data.id}>
      <CardCode data={data} />
     </Grid>
    ))}
   </Grid.Container>
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
     <Link href="https://twitter.com/DamianHuchin" target="_blank">
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

export const getServerSideProps = async () => {
 const projectList = await getProjects()
 const codeList = await getCodeLenguajes()
 const toolList = await getTools()

 return { props: { projectList, codeList, toolList } }
}
