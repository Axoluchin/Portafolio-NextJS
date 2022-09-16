import Head from 'next/head'
import { Text, Spacer, Image } from '@nextui-org/react'

import SubTitle from '../../../components/SubTitle'
import { blog } from '../../../utils/types'
import { getBlog } from '../../../utils/firebase'

const Post = ({ blogData }: { blogData: blog | null }) => {
 if (!blogData) {
  return <Text>Articulo no econtrado D:</Text>
 }

 return (
  <div>
    <Head>
        <title>{blogData.title}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blogData.title} />
        <meta property="og:description" content={blogData.desc} />
        <meta property="og:image" content={blogData.image} />
        <meta property="twitter:image" content={blogData.image}/>
        <meta property="twitter:card" content="article" />
        <meta name="twitter:site" content="@DamianHuchin" />
        <meta name="twitter:description" content={blogData.desc} />
        <meta name="twitter:title" content={blogData.title} />
    </Head>
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
     {new Date(blogData.date.seconds*1000).toLocaleDateString('es-mx', {
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
       <Text style={{
        textAlign: 'justify'
       }}>{data}</Text>
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

export const getServerSideProps = async ({
 params,
}: {
 params: { id: string }
}) => {
 const { id } = params
 const blogData = await getBlog(id)

 return { props: { blogData } }
}
