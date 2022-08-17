import { Text, useTheme } from '@nextui-org/react'

const MiniTitle = ({
 title,
 position,
}: {
 title: string
 position: 'right' | 'left'
}) => {
 return (
  <Text h3 style={{
    maxWidth: 280,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    marginTop: 8,
    textAlign: position,
    marginLeft: position === 'right'? 'auto' : 0
  }}>
   {title}
  </Text>
 )
}

export default MiniTitle
