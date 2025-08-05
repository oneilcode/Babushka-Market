import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AboutPage } from "./pages/AboutPage/AboutPage"
import { MainLayout } from "./components/MainLayout/MainLayout"
import { HomePage } from "./pages/HomePage/HomePage"
import { ContactPage } from "./pages/ContactPage/ContactPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>  
          <Route  element={<MainLayout />}>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Route>     
        </Routes>  
      </BrowserRouter>
    </> 
  )
}

export default App
