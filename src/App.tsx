import { Grid, GridItem, Center, Flex, Box } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import PortfolioGrid from './components/PortfolioGrid'
import SlideShow from './components/SlideShow'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/Home';
import Overview from './components/Overview';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
