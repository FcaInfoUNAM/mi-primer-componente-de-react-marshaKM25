import './App.css'
import './grid.css'
import { Navigation } from './Navigation'
import { Grid } from './Grid'
import logo from './assets/react.svg'

const navigationItems = [
  { ref: "https://fca.unam.mx", title: "FCA" },
  { ref: "https://www.google.com", title: "Google" },
  { ref: "https://www.facebook.com", title: "Facebook" }
]

function App() {
  return (
    <>
      <Navigation srcImg={logo} alt="Logo" items={navigationItems} />
      <Grid items={navigationItems} />
    </>
  )
}

export default App

