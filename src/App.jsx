import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MainNews from './components/MainNews'
import MainNewRadio from './components/MainNewRadio'
import MainNewReleases from './components/MainNewReleases'
import MainNewReleases2 from './components/MainNewReleases2'
import MainExplore from './components/MainExplore'

function App() {
  return (
    <>
      <MyNavbar />
      <MainNews />
      <MainNewRadio />
      <MainNewReleases />
      <MainNewReleases2 />
      <MainExplore />
    </>
  )
}

export default App
