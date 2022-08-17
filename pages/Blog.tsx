import { useState, useEffect } from 'react'
import { Text } from '@nextui-org/react'

import useIsMounted from '../hooks/useIsMounted'
import CardBlog from '../components/CardBlog'
import SubTitle from '../components/SubTitle'
import { getBlogs } from '../utils/firebase'
import { blog } from '../utils/types'

const Blog = () => {
 const IsMounted = useIsMounted()
 const [blogList, setBlogList] = useState<blog[]>([])

 useEffect(() => {
    getBlogs().then(data => setBlogList(data))
 }, [])

 if (!IsMounted) {
  return null
 }
 return (
  <div>
   <SubTitle text='Blog'/>
   {
    blogList.map(data =>(
        <CardBlog key={data.id} data={data}/>
    ))
   }
  </div>
 )
}

export default Blog
