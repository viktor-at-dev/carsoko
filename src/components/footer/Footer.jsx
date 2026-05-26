import './Footer.css'
import face from '../../assets/face.jpg'
import x from '../../assets/x.png'
import insta from '../../assets/insta.jpg'
import tik from '../../assets/tiktok.png'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <div className="column-holder">
            <div className="column-1">
                <h3>About us</h3>
                <p>Our vision has always been clear: to redefine the car ownership experience in Kenya by providing premium luxury vehicles with unmatched service standards.</p>
            </div>
            
            <div className="column-2">
                <h3>Social Accounts</h3>
                <div>
                    <img src={face} alt="facebook"/> 
                    <p>facebook</p> 
                </div>
                <div>
                    <img src={x} alt="X / Twitter"/>
                    <p>twitter</p>
                </div>
                <div>
                    <img src={insta} alt="instagram"/>
                    <p>instagram</p>
                </div>
                <div>
                    <img src={tik} alt="tiktok"/>
                    <p>tiktok</p>
                </div>
            </div>

            {/* TYPO FIXED HERE: classname changed to className */}
            <div className="column-3">
                <h3>Company</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About us</Link></li>
                    <li><Link to="/ContactUs">Contact us</Link></li>
                    <li><Link to="/">Browse</Link></li>                  
                </ul>
            </div>

            <div className="column-4">
                <h3>Contact us</h3>
                <p>📞 +254 702 121 212</p>
                <p>✉️ info@cardigital.net</p>
                <p>📍 Limuru Road next to Village Market</p>
                <p>🇰🇪 Kiambu County</p>
            </div>
        </div>
    )
}