import '../style/main.scss'
import Menu from '../components/Menu'
import { Container } from 'react-bootstrap'
 
function MyApp({ Component, pageProps }) {
  return (
    <div className='min-vh-100 bg-light'>
      <Menu />
      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  )
}

export default MyApp
