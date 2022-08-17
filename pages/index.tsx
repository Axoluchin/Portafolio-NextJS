import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { Text } from '@nextui-org/react'

import SubTitle from '../components/SubTitle'
import CardBlog from '../components/CardBlog'
import { getLastBlogs } from '../utils/firebase'
import { blog } from '../utils/types'
import imgBg from '../public/images/mexicanMountain.webp'

const Home: NextPage = () => {
 const [lastBlogs, setLastBlogs] = useState<blog[]>([])
 useEffect(() => {
  getLastBlogs().then(setLastBlogs)
 }, [])

 return (
  <div>
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
   <SubTitle text="Ultimos blogs" />
   {lastBlogs.map(data => (
    <CardBlog key={data.id} data={data} />
   ))}
  </div>
 )
}

export default Home
