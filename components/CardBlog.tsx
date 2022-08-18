import Link from 'next/link'
import { Card, Text, Link as NextUILink } from '@nextui-org/react'
import { blog } from '../utils/types'

const CardBlog = ({ data }: { data: blog }) => (
 <Card
  style={{
   maxWidth: 600,
   margin: '0 auto',
  }}
  isHoverable
  isPressable
 >
  <Link href={`/Blog/${data.id}`}>
   <NextUILink
    block
    style={{
     flexDirection: 'row',
     alignItems: 'center',
    }}
   >
    <div>
     <Card.Image src={data.image} width={250} />
     <Text
      style={{
       fontWeight: 'lighter',
      }}
     >
      {new Date(data.date.seconds*1000).toLocaleDateString('es-mx', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
     })}
     </Text>
    </div>
    <Card.Body>
     <Text h3>{data.title}</Text>
     <Card.Divider />
     <Text>{data.desc}</Text>
    </Card.Body>
   </NextUILink>
  </Link>
 </Card>
)

export default CardBlog
