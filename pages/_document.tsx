import Document, {
 DocumentContext,
 Main,
 DocumentInitialProps,
 Head,
 Html,
 NextScript,
} from 'next/document'
import { CssBaseline } from '@nextui-org/react'

class MyDocument extends Document {
 static async getInitialProps(
  ctx: DocumentContext
 ): Promise<DocumentInitialProps> {
  const initialProps = await Document.getInitialProps(ctx)
  return {
   ...initialProps,
   styles: <>{initialProps.styles}</>,
  }
 }

 render() {
  return (
   <Html
    lang="es-mx"
    style={{
     scrollBehavior: 'smooth',
    }}
   >
    <Head>{CssBaseline.flush()}</Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  )
 }
}

export default MyDocument
