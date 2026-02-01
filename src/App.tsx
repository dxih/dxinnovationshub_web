import { ThemeProvider, CssBaseline, Box, } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/NavBar';
import Hero from "./components/Hero"
import ServiceCard from "./components/ServiceCard";
import  WhyDXIH from "./components/WhyDXIH"
import GetStarted from './components/GetStarted';
import Footer from "./components/Footer"


import Portfolio from "./components/Portfolio";

function App() {
  

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main">
        <Navbar />
         <Hero />
     <ServiceCard />
     <Portfolio />
    <WhyDXIH />
    <GetStarted />
    < Footer />
      </Box>

    </ThemeProvider>
   

    </>
  )
}

export default App
