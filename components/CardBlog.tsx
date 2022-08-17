import { Card, Text } from "@nextui-org/react";
import { blog } from "../utils/types";

const CardBlog = ({data}:{data:blog}) => (
    <Card style={{
        flexDirection: 'row',
        maxWidth: 600,
        margin: '0 auto'
    }}
    isHoverable
    isPressable
    >
        <Card.Image src={data.image} width={250}/>
        <Card.Body>
        <Text h3>{data.title}</Text>
        <Card.Divider/>
        <Text>{data.desc}</Text>
        </Card.Body>
    </Card>
)

export default CardBlog