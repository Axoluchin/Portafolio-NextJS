import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Text, Spacer, Image } from '@nextui-org/react'

import SubTitle from '../../../components/SubTitle'
import { blog } from '../../../utils/types'
import { getBlog } from '../../../utils/firebase'

const Post = () => {
 const [blogData, setBlogData] = useState<blog | null>(null)
 const router = useRouter()
 const { id } = router.query

 useEffect(() => {
  id && getBlog(id as string).then(setBlogData)
 }, [id])

 if (!blogData) {
  return <Text>Articulo no econtrado D:</Text>
 }

 return (
  <div>
   <Image src={blogData.image} alt={blogData.title} height={250} />
   <SubTitle text={blogData.title} />
   <div
    style={{
     maxWidth: 750,
     margin: '0 auto',
     padding: 8,
    }}
   >
    <Text
     style={{
      marginBottom: 8,
      textAlign: 'right',
      fontWeight: 'bold',
     }}
    >
     {blogData.date.toDate().toLocaleDateString('es-mx', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
     })}
    </Text>
    <Text>{blogData.startText}</Text>
    <Spacer y={1} />
    {blogData.blog.map((data, index) =>
     index % 2 ? (
      <div key={index}>
       <Text>{data}</Text>
       <Spacer y={1} />
      </div>
     ) : (
      <Text h3 key={index}>
       {data}
      </Text>
     )
    )}
    <Text>{blogData.finalText}</Text>
   </div>
  </div>
 )
}

export default Post
