

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './Common/Footer'
import Navbar from './Common/Navbar'
import Home from './Pages/Home'
import SignIn from './Components/SignIn'
import Signup from './Components/Signup'
import SignupBusiness from './Components/SignupBusiness'
import Forgot from './Components/Forgot '
import VerifyOtp from './Components/VerifyOtp'
import ResetPassword from './Components/ResetPassword'
import SignInOwner from './Components/SignInOwner'
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
{/* <Route path="/Forgot" element={<Forgot/>} /> */}

 <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/verify-otp" element={<VerifyOtp/>} />
        <Route path="/reset-password" element={<ResetPassword/>} />
        <Route path="/SignInOwner" element={<SignInOwner/>} />
    </Routes>
     <Footer/>
    </BrowserRouter>
   
      </>
  )
}

export default App
