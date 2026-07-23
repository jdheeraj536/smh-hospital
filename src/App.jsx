import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'; // Sahi jagah import kiya
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop ko BrowserRouter ke andar rakha hai taaki ye location access kar sake */}
      <ScrollToTop />
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        
        {/* Catch-all route for 404 Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;