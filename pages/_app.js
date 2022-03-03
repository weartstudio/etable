import '../style/main.scss'
import Menu from '../components/Menu'
import Head from 'next/head'
 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>eTable</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='min-vh-100 bg-light'>
        <Menu />
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
