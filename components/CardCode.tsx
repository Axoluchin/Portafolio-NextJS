import { Card, Text } from "@nextui-org/react"
import { codeLenguaje } from "../utils/types"

const CardCode = ({data}:{data:codeLenguaje}) => (
<Card isHoverable style={{
    width: 'auto',
    backgroundColor: 'transparent',
    margin: '1.5rem'
}}>
    <Card.Image src={data.image} height={100}/>
        <Text h3 style={{
            textAlign: 'center'
        }}>{data.name}</Text>
</Card>
)

export default CardCode