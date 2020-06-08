import Head from 'next/head'
import Layout from '../components/layout/layout'
import postsContext from '../contexts/postsContext'

const { PostsProvider } = postsContext

export default ({ Component, pageProps }) => (
  <Layout>
    <Head>
      {/* Add Bootstrap. Just for Simplicity */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.min.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
    </Head>
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  </Layout>
)
