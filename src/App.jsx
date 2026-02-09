

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './Common/Footer'
import Navbar from './Common/Navbar'
import Home from './Pages/Home'
import SignIn from './Components/SignIn'
import Signup from './Components/Signup'
import SignupBusiness from './Components/SignupBusiness'
function App() {
 

  return (
    <>
    <BrowserRouter>
     <Navbar/>
   
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/signin" element={<SignIn/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/SignupBusiness" element={<SignupBusiness/>} />
    </Routes>
     <Footer/>
    </BrowserRouter>
   
      </>
  )
}

export default App
