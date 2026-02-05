

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './Common/Footer'
import Navbar from './Common/Navbar'
import Home from './Pages/Home'
import SignIn from './Components/SignIn'


function App() {
 

  return (
    <>
    <BrowserRouter>
     <Navbar/>
   
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/signin" element={<SignIn/>} />
    </Routes>
     <Footer/>
    </BrowserRouter>
   
      </>
  )
}

export default App
