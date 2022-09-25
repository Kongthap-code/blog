import '../styles/globals.css'
import Container from "../components/Container";

function App({ Component, pageProps }) {
  return (
  <Container>
    <Component {...pageProps} />
  </Container>
  )
}

export default App
