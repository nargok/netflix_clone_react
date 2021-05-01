import { Row } from 'components/Row'
import { Banner } from 'components/Banner'
import { requests } from './request'

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX CLONE"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      <Row title="Horror Moveis" fetchUrl={requests.feactHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  )
}

export default App
