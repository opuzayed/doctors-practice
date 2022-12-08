import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import footer from '../../../assets/images/footer.png';
const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <footer className="p-10"
    style={{
        
        background: `url(${footer})`,
        backgroundSize:'cover'
      }}
    >
      <div className="footer text-white">
        <div>
          <span className="footer-style">Services</span>
          <Link to='/' className="link link-hover">Branding</Link>
          <Link to='/' className="link link-hover">Design</Link>
          <Link to='/' className="link link-hover">Marketing</Link>
          <Link to='/' className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-style">Company</span>
          <Link to='/' className="link link-hover">About us</Link>
          <Link to='/' className="link link-hover">Contact</Link>
          <Link to='/' className="link link-hover">Jobs</Link>
          <Link to='/' className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-style">Legal</span>
          <Link to='/' className="link link-hover">Terms of use</Link>
          <Link to='/' className="link link-hover">Privacy policy</Link>
          <Link to='/' className="link link-hover">Cookie policy</Link>
        </div>
      </div>
      <div className="text-center text-white mt-10">
        <p>
          Copyright <span>© {getYear()} - All right
          reserved by ACME Industries Ltd</span> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
