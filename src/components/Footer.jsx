import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2D100C] text-white pt-16 pb-8 border-t-4 border-[#E4002B]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo Section */}
        <div className="space-y-4">
          <div className="text-3xl font-extrabold tracking-tighter">
            SMH <span className="text-[#E4002B]">HOSPITAL</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Purnea ka vishwasniya hospital. Hum aapki sehat aur suraksha ke liye pratibaddh hain.
          </p>
        </div>

        {/* Quick Links (Fixed Routing) */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-[#E4002B]">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link to="/" className="hover:text-[#E4002B] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#E4002B] transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#E4002B] transition">Services</Link></li>
            <li><Link to="/doctors" className="hover:text-[#E4002B] transition">Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-[#E4002B] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info (Clickable) */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold mb-6 text-[#E4002B]">Contact Info</h3>
          <p className="text-sm text-gray-300">📍 Rambagh Road Line Bazar, Purnea, India, 854301</p>
          
          {/* Phone Link */}
          <a href="tel:+919031859372" className="block text-sm text-gray-300 hover:text-[#E4002B] transition">
            📞 +91 9031859372
          </a>
          
          {/* Email Link */}
          <a href="mailto:info@smhhospital.com" className="block text-sm text-gray-300 hover:text-[#E4002B] transition">
            ✉️ info@smhhospital.com
          </a>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-[#E4002B]">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <a href="https://www.facebook.com/profile.php?id=61591899209624" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4002B]">Facebook</a>
            <a href="https://www.instagram.com/purneasmhhospital/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E4002B]">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-[#4a1c16] text-center md:flex justify-between items-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} SMH Hospital. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">
          Designed by <a href="https://dbtechx.com/" target="_blank" rel="noopener noreferrer" className="text-[#E4002B] font-bold hover:underline">DBTECHX</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;