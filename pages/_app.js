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
    </Head>
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  </Layout>
)
