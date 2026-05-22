import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <div className="nav-container">
        {/* Brand Group */}
        <Link to="/" className="logo-link">
          <img src={logo} alt="company logo" className="logo" />
        </Link>
        
        {/* Links Navigation Group */}
        <div className="nav-links-wrapper">
          <Link to="/">Home</Link>
          <Link to="/CarsInStock">Cars in Stock</Link>
          <Link to="/IncomingCars">Incoming Cars</Link>
          <Link to="/Finance">Finance</Link>
          <Link to="/ImportServices">Import Services</Link>
          <Link to="/AutoCare">Auto-care</Link>
          <Link to="/Blogs">Blogs</Link>
          <Link to="/ContactUs">Contact Us</Link>
          <Link to="/AboutUs">About Us</Link>
        </div>

        {/* Action Buttons Group */}
        <div className="nav-actions">
          <Link to="/ServiceCenter"><button className="service">Service Center</button></Link>
          <Link to="/ImportWithUs"><button className="import">Import With Us</button></Link>
        </div>
      </div>
    </nav>
  );
}