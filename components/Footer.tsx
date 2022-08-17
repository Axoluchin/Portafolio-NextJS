import { Text, useTheme } from '@nextui-org/react'

const Footer = () => {
 const {theme} = useTheme()
 return (
  <div
   style={{
    height: '12rem',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: theme?.colors.neutralBorder.value,
    marginTop: '1rem',
    backgroundColor: theme?.colors.backgroundContrast.value
   }}
  >
   <Text
    style={{
     textAlign: 'center',
    }}
   >
    Damián Huchin 2022
   </Text>
  </div>
 )
}

export default Footer
