import { Text } from "@nextui-org/react"

const SubTitle = ({text}:{text:string}) => (
    <Text size={'3rem'} h2 style={{
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        maxWidth: '75%',
        margin: '0 auto'
    }}>{text}</Text>
)

export default SubTitle