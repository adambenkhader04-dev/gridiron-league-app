import '../styles/globals.css'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp