import react from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import MenPage from './pages/MenPage'
import WomenPage from './pages/WomenPage'
import KidsPage from './pages/KidsPage'
import AboutUsPage from './pages/AboutUsPage'
import ContactPage from './pages/ContactPage'
import {Routes, Route, useLocation} from 'react-router-dom'

const App = () => {
  const location = useLocation(); //to get the current location object from the React Router, which contains information about the current URL, including the pathname. This allows the component to determine which route is currently active and make decisions based on that information, such as conditionally rendering components or applying specific styles based on the current route.
  const hideNavbar = ["/login", "/signup"].includes(location.pathname); //to determine whether the Navbar component should be hidden based on the current route. The hideNavbar variable is set to true if the current pathname matches either "/login" or "/signup", indicating that the Navbar should not be displayed on these pages. This allows for a cleaner user interface on authentication pages where navigation options may not be necessary or desired.
  return (
    <div>
      {!hideNavbar && <Navbar />}  

      <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path='/signup' element= {<SignUpPage/>} />
        <Route path='/login' element= {<LoginPage/>} />
        <Route path='/settings' element= {<SettingsPage/>} />
        <Route path='/profile' element= {<ProfilePage/>} />
        <Route path='/men' element= {<MenPage/>} />
        <Route path='/women' element= {<WomenPage/>} />
        <Route path='/kids' element= {<KidsPage/>} />
        <Route path='/aboutus' element= {<AboutUsPage/>} />
        <Route path='/contact' element= {<ContactPage/>} />
      </Routes>
    </div>

  )
}
export default App
