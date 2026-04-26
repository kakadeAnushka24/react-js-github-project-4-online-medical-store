import "./footer.css";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { Phone, Mail, MessageCircle} from "lucide-react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


function Footer() {
    return (
        <div className="footer-container">
            <div className="partition">
            <div className="part1">
                <div>
                    <Link to="/" className='project-main-title' style={{ textDecoration: "none" }}>
                        <img src={logo} alt="logo" />
                        <span className='main-title'>MedicalStore</span>
                    </Link>
                </div>
                <div>
                    <p className="quote">
                        “Every product we provide is backed by care, and a commitment to your well-being.”
                    </p>
                </div>
            </div>

            <div className="part2">
                <span>Quick Links</span>
                <div className='footer-menu-container'>
                    <Link to="/" className='nav-menu'>Home</Link>
                    <Link to="/products" className='nav-menu'>Products</Link>
                    <Link to="/order" className='nav-menu'>Order</Link>
                    <Link to="/login" className='nav-menu'>Login</Link>
                    <Link to="/signup" className='nav-menu'>Sign Up</Link>
                </div>
            </div>

            <div className="part3">
                <span>Contact Us</span>
                <div className="contact-info">
                    <div className="sub-part3">
                        <Phone />
                        <Link to="tel:+91 9876543210" className="link"> +91 1234567890</Link>
                    </div>

                    <div className="sub-part3">
                        <Mail />
                        <Link to="mailto:medicaltore@email.com" className="link"> medicalstore@email.com</Link>
                    </div>
                </div>
            </div>

            <div className="part4">
                <span>Social Media</span>
                 <div className="social-info">
                <div className="sub-part4">
                    <FaInstagram />
                    <Link
                        to="https://instagram.com/yourusername"
                        target="_blank"
                        className="link" >
                        <span>Instagram</span>
                    </Link>
                </div>
                <div className="sub-part4">
                    <FaFacebook />
                    <Link
                        to="https://facebook.com/yourpage"
                        target="_blank"
                        className="link">
                        <span>Facebook</span>
                    </Link>
                </div>

                <div className="sub-part4">
                    <FaTwitter />
                    <Link
                        to="https://twitter.com/yourusername"
                        target="_blank"
                        className="link" >
                        <span>Twitter</span>
                    </Link>
                </div>
                </div>
            </div>
        </div>
        <div>
           <hr className="divider"/> 
           </div>
        <div className="part5">
               <p>©|All Rights Reserved By MedicalStore|{new Date().getFullYear()}</p>
        </div>
        </div >
    )
}

export default Footer;