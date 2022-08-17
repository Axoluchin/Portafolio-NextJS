import { Card, Text, Link } from '@nextui-org/react'
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
  <Link
   block
   href={`/Blog/${data.id}`}
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
     {data.date.toDate().toLocaleDateString('es-mx', {
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
  </Link>
 </Card>
)

export default CardBlog
