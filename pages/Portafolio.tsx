import Head from 'next/head'
import { Text, Link, Row, Spacer } from '@nextui-org/react'
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
  <div
   style={{
    maxWidth: 900,
    margin: '0 auto',
   }}
  >
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
    }}
   >
    <Text
     h1
     style={{
      textAlign: 'center',
      textShadow: '5px 0px 0px #444444',
     }}
    >
     Damián Hernández Huchín
    </Text>
    <Text
     h3
     style={{
      textAlign: 'center',
      textShadow: '-4px 0px 0px #444444',
     }}
    >
     Programador Mobile y Frontend
    </Text>
   </div>
   <SubTitle text="Experiencia" />
   <Row justify="space-around" wrap="wrap">
    {projectList.map(data => (
     <CardProject project={data} key={data.id} />
    ))}
   </Row>
   <SubTitle text="Skills" />
   <MiniTitle title="Lenguajes y Frameworks" position="left" />
   <Row justify="space-around" wrap="wrap">
    {codeList.map(data => (
     <CardCode data={data} key={data.id} />
    ))}
   </Row>
   <MiniTitle title="Herramientas" position="right" />
   <Row justify="space-around" wrap="wrap">
    {toolList.map(data => (
     <CardCode data={data} key={data.id} />
    ))}
   </Row>
   <SubTitle text="Contacto" />
   <Spacer y={1} />
   <Row justify="space-around" wrap="wrap">
    <Link href="https://www.linkedin.com/in/damianhuchin/" target="_blank">
     <Text
      h2
      color="$blue500"
      style={{
       margin: 0
      }}
     >
      <IoLogoLinkedin /> Linkedin
     </Text>
    </Link>
    <Link href="https://github.com/Axoluchin" target="_blank">
     <Text
      h2
      color="$gray800"
      style={{
       margin: 0,
      }}
     >
      <IoLogoGithub /> Github
     </Text>
    </Link>
    <Link href="https://twitter.com/DamianHuchin" target="_blank">
     <Text
      h2
      color="$blue700"
      style={{
       margin: 0,
      }}
     >
      <IoLogoTwitter /> Twitter
     </Text>
    </Link>
   </Row>
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
