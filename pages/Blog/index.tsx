import CardBlog from '../../components/CardBlog'
import SubTitle from '../../components/SubTitle'
import { getBlogs } from '../../utils/firebase'
import { blog } from '../../utils/types'

const Blog = ({ blogList }: { blogList: blog[] }) => {
 return (
  <div>
   <SubTitle text="Blog" />
   {blogList.map(data => (
    <CardBlog key={data.id} data={data} />
   ))}
  </div>
 )
}

export default Blog

export const getServerSideProps = async () => {
 const blogList = await getBlogs()
 return { props: { blogList } }
}
