import { Routes,Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import HomePage from './Pages/HomePage'
import Programs from './Pages/Programs'
import NewsAndEvents from './Pages/NewsAndEvents'
import CampusLife from './Pages/CampusLife'
import ContactUs from './Pages/ContactUs'
import Login from './Pages/Login'
import CourseDetails from './Components/CourseDetails'

import VisionMission from './Pages/About/VisionMission';
import Overview from './Pages/Admission/OverView';
import Calender from './Pages/Admission/Calender';
import AcademicCases from './Pages/Admission/AcademicCases'
import Admission from './Pages/Admission/Admission'
import About from './Pages/About/About';



function App() {
 

  return (
    <>
    <Routes>
      <Route index  element={<HomePage/>}></Route>
   
      <Route path="/VisionMission" element={<VisionMission/>}/>
      <Route path="/Overview" element={<Overview/>}/>
      <Route path="/calender" element={<Calender/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="academic-cases" element={<AcademicCases/>}/>
      <Route path="/admission" element={<Admission/>}/>
      <Route path ="/courses" element={<Programs/>}></Route>
      <Route path="/courses/:school" element={<CourseDetails />} />
      <Route path ="/news" element={<NewsAndEvents/>}></Route>
      <Route path ="/campus" element={<CampusLife/>}></Route>
      <Route path ="/contact" element={<ContactUs/>}></Route>
      <Route path ="/login" element={<Login/>}></Route>
    </Routes>
     
  
 
  


    </>
  )
}

export default App
