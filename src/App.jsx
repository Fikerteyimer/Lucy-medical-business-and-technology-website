import { Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Programs from './Pages/Programs'
import Admission from './Pages/Admission'
import NewsAndEvents from './Pages/NewsAndEvents'
import CampusLife from './Pages/CampusLife'
import ContactUs from './Pages/ContactUs'
import Login from './Pages/Login'
import CourseDetails from './Components/CourseDetails'



function App() {
 

  return (
    <>
    <Routes>
      <Route index  element={<HomePage/>}></Route>
      <Route path ="/about" element={<AboutPage/>}></Route>
      <Route path ="/courses" element={<Programs/>}></Route>
      <Route path="/courses/:school" element={<CourseDetails />} />
      <Route path ="/admission" element={<Admission/>}></Route>
      <Route path ="/news" element={<NewsAndEvents/>}></Route>
      <Route path ="/campus" element={<CampusLife/>}></Route>
      <Route path ="/contact" element={<ContactUs/>}></Route>
      <Route path ="/login" element={<Login/>}></Route>
    </Routes>
     
  
 
  


    </>
  )
}

export default App
