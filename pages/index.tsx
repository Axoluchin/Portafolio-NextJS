import type { NextPage } from 'next'
import { Text } from '@nextui-org/react'

import imgBg from '../public/images/mexicanMountain.webp'

const Home: NextPage = () => {
 return (
  <div
   style={{
    backgroundImage: `url(${imgBg.src})`,
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '100px',
    marginTop: '2rem'
   }}
  >
   <Text
    h1
    style={{
     textAlign: 'center',
    }}
   >
    Damián Hernández Huchín
   </Text>
   <Text
    h3
    style={{
     textAlign: 'center',
    }}
   >
    Programar es la magia del siglo XXI
   </Text>
  </div>
 )
}

export default Home
