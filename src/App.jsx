import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import IncomingCars from './pages/incomingcars/IncomingCars'
import Finance from './pages/finance/Finance'
import ImportServices from './pages/importservices/ImportServices'
import Blogs from './pages/blogs/Blogs'
import ContactUs from './pages/contactus/ContactUs'
import AboutUs from './pages/aboutus/AboutUs'
import ServiceCenter from './pages/servicecenter/ServiceCenter'
import ImportWithUs from './pages/importwithus/ImportWithUs'
import CarStock from './pages/Carstock/CarStock'
import AutoCare from './pages/autocare/AutoCare'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/IncomingCars" element={<IncomingCars/>}/>
          <Route path="/Finance" element={<Finance/>}/>
          <Route path="/ImportServices" element={<ImportServices/>}/>
          <Route path="/Blogs" element={<Blogs/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/ServiceCenter" element={<ServiceCenter/>}/>
          <Route path="/ImportWithUs" element={<ImportWithUs/>}/>
          <Route path="/AutoCare" element={<AutoCare/>}/>
          <Route path="/CarStock" element={<CarStock/>}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App
