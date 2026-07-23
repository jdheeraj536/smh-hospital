import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // 'lucide-react' install kar lena
import logo from '../assets/logosmh.webp';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return isActive 
      ? "text-[#E4002B] font-extrabold text-[18px] transition-all"
      : "text-gray-700 hover:text-[#E4002B] font-semibold text-[17px] transition-all";
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Emergency Strip */}
      <div className="bg-[#E4002B] text-white text-center py-2 font-bold text-xs md:text-sm tracking-widest">
        🚨 EMERGENCY: Call Now - 9031859372
      </div>

      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm px-4 md:px-10 py-0 flex justify-between items-center">
        
        {/* Brand Logo (Image support) */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SMH Hospital Logo" className="h-30 w-30" />
          <span className="text-2xl md:text-3xl font-extrabold text-[#5D241C]">SMH HOSPITAL</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/about" className={getLinkClass('/about')}>About</Link>
          <Link to="/services" className={getLinkClass('/services')}>Services</Link>
          <Link to="/doctors" className={getLinkClass('/doctors')}>Doctors</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
          
          <Link to="/appointment" className="bg-[#5D241C] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#E4002B] transition-all">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-[#5D241C]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-xl">
          <Link to="/" onClick={() => setIsOpen(false)} className={getLinkClass('/')}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={getLinkClass('/about')}>About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className={getLinkClass('/services')}>Services</Link>
          <Link to="/doctors" onClick={() => setIsOpen(false)} className={getLinkClass('/doctors')}>Doctors</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={getLinkClass('/contact')}>Contact</Link>
          <Link to="/appointment" onClick={() => setIsOpen(false)} className="bg-[#E4002B] text-white py-3 rounded-xl text-center font-bold">Book Now</Link>
        </div>
      )}
    </header>
  );
};

export default Header;