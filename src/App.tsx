import { ThemeProvider, createTheme } from "@mui/material"
import { About, Consulting, Header, Nav, Services, Cite, Testimonials, Footer } from "./components/Index"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const theme = createTheme({
  direction: 'rtl' , 
  typography: {
    "fontFamily": `"iransans"`,
    "fontSize": 11,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
})

function App1() {

  return (
    
        <div className="app">
          <Nav/>
          <Header/>
          <About/>
          <Consulting/> 
          <Services/>
          <Cite/>
          <Testimonials/>
          <Footer/>
        </div>
  )
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App1 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App