import { Text } from '@nextui-org/react'
import CardProject from '../components/CardProject'

import SubTitle from '../components/SubTitle'

import { project } from '../utils/types'
const example:project = {
    date: '2022',
    desc: 'Proyecto chido :D',
    id: '76876873',
    image: 'uwu',
    name: 'Orogeddon',
    resume: 'menos texto',
    tech: [
        'ts', 'js', 'firebase', 'rn'
    ],
    githubRepo: 'lol'
}

const Portafolio = () => (
 <div>
  <SubTitle text='Experiencia'/>
    <CardProject project={example}/>
 </div>
)

export default Portafolio
