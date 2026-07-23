import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartPulse, Stethoscope, Activity, Brain, Bone, Baby, Microscope, Eye, Ambulance } from 'lucide-react';
import { Link } from 'react-router-dom'; // Agar react-router use kar rahe ho
import hospitalImg1 from '../assets/hospital1.webp'; // Apni file ka naam check kar lena
import tushar from '../assets/tushar.webp';
import rajkumar from '../assets/rajkumar.webp';
import shaileshsingh from '../assets/shaileshsingh.webp';
import shaileshkarn from '../assets/shaileshkarn.webp';





const Home = () => {
  // Slider images setup
  const images = [hospitalImg1];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full text-gray-800">
      

      {/* Hero Carousel Section */}
<div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
  <AnimatePresence mode='wait'>
    <motion.img
      key={index}
      src={images[index]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      // Yahan maine height aur position update ki hai
      className="absolute inset-0 w-full h-full object-cover object-center md:object-center"
    />
  </AnimatePresence>
  
  <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay thoda badha diya taaki text achhe se dikhe */}
  
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-4xl md:text-7xl font-extrabold mb-4 md:mb-6">
      SMH <span className="text-red-500">CARE OF LIFE</span>
    </h1>
    <p className="text-lg md:text-2xl mb-6 md:mb-8 font-light italic">"Har pal, har saans, hum aapke saath"</p>
    
    <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto px-4 md:px-0">
    {/* Book Appointment Link */}
    <Link to="/appointment" className="bg-red-700 hover:bg-red-800 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition text-center">
      Book Appointment
    </Link>
    
    {/* Emergency Services Link */}
    <Link to="/services" className="bg-white hover:bg-gray-100 text-red-700 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold transition text-center">
      Emergency Services
    </Link>
  </div>
  </div>
</div>

      {/* Why Choose Us & Rating */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose SMH Hospital?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Experienced Doctors', '24/7 Emergency', 'Advanced Technology', 'Affordable Care'].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-md border-b-4 border-red-500">
                <h3 className="font-bold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Services/Treatments Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Medical Treatments</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Cardiology', icon: <HeartPulse size={40} className="text-red-500" /> },
            { name: 'Neurology', icon: <Brain size={40} className="text-red-500" /> },
            { name: 'General Surgery', icon: <Stethoscope size={40} className="text-red-500" /> },
            { name: 'Pediatrics', icon: <Baby size={40} className="text-red-500" /> },
            { name: 'Orthopedics', icon: <Bone size={40} className="text-red-500" /> },
            { name: 'Critical Care', icon: <Activity size={40} className="text-red-500" /> },
            { name: 'Laboratory', icon: <Microscope size={40} className="text-red-500" /> },
            { name: 'Ophthalmology', icon: <Eye size={40} className="text-red-500" /> },
            { name: 'Ambulance Support', icon: <Ambulance size={40} className="text-red-500" /> },
          ].map((service, i) => (
            <div key={i} className="p-8 border border-gray-200 rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white cursor-pointer group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="font-bold text-xl mb-2">{service.name}</h3>
              <p className="text-gray-600">Expert care provided by our specialists.</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Our Hospital Section */}
<section className="py-12 md:py-20 bg-gray-50">
  <div className="container mx-auto px-4 md:px-6">
    {/* Heading */}
    <div className="text-center mb-10 md:mb-16">
      <h3 className="text-[#E4002B] font-bold tracking-widest uppercase text-xs md:text-sm mb-2">Our Story</h3>
      <h2 className="text-3xl md:text-5xl font-bold text-[#5D241C]">About Our Hospital in Purnea</h2>
      <div className="w-16 md:w-24 h-1 bg-[#E4002B] mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Main Card */}
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
      
      {/* Left: Image & Stats */}
      <div className="w-full lg:w-1/2">
        <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-auto md:h-[400px]">
  <img 
    src={hospitalImg1} 
    alt="Hospital Facility" 
    className="w-full h-full object-contain md:object-cover bg-gray-100"
  />
  <div className="absolute bottom-0 left-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent w-full text-white">
    <p className="font-bold text-sm md:text-lg">Serving families with trusted care</p>
  </div>
</div>
        
        {/* Experience Stats */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
          <div className="p-3 md:p-4 border rounded-xl bg-gray-50 text-center">
            <p className="text-[10px] md:text-sm text-gray-500 uppercase font-semibold">Experience</p>
            <p className="text-lg md:text-2xl font-bold text-[#5D241C]">25+ Years</p>
          </div>
          <div className="p-4 border rounded-xl bg-gray-50 text-center">
            <p className="text-[10px] md:text-sm text-gray-500 uppercase font-semibold">Approach</p>
            <p className="text-lg md:text-2xl font-bold text-[#5D241C]">Patient First</p>
          </div>
        </div>
      </div>

      {/* Right: Mission & Values */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-xl md:text-2xl font-bold text-[#5D241C] mb-4">Our Mission</h3>
        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
          At SMH, our mission is to provide accessible, compassionate, and high-quality healthcare for every family in the community.
        </p>
        
        <h3 className="text-xl md:text-2xl font-bold text-[#5D241C] mb-4 md:mb-6">Our Values</h3>
        <div className="space-y-3 md:space-y-4">
          {['Excellence', 'Compassion', 'Innovation', 'Integrity'].map((value, i) => (
            <div key={i} className="flex items-center gap-3 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="text-[#E4002B] font-bold">✓</div>
              <div>
                <p className="font-semibold text-sm md:text-base text-[#5D241C]">{value}</p>
                <p className="text-[10px] md:text-xs text-gray-500 hidden md:block">— Delivering trusted, patient-first healthcare.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

     {/* Trusted Specialists Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h3 className="text-[#E4002B] font-bold tracking-widest uppercase text-sm mb-2">Our Trusted Specialists</h3>
      <h2 className="text-4xl font-bold text-[#5D241C]">Specialists at our Hospital in Purnea</h2>
      <div className="w-24 h-1 bg-[#E4002B] mx-auto mt-4 rounded-full"></div>
    </div>

    {/* Doctor Cards */}
  {/* Doctor Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    { 
      name: 'Dr. Tushar Kanti Sarkar', 
      spec: 'MBBS, CCEBDM (CMO)', 
      sub: 'Critical Care & Emergency', 
      img: tushar 
    },
    { 
      name: 'Dr. Raj Kumar Raj', 
      spec: 'M.B.B.S, M.S, M.ch', 
      sub: 'Neurosurgery', 
      img: rajkumar 
    },
    { 
      name: 'Dr. Shailesh Kumar Singh', 
      spec: 'MS IN GENERAL, LAPAROSCOPIC SURGEON', 
      sub: 'General, Laparoscopic & Endo Urology', 
      img: shaileshsingh 
    },
    { 
      name: 'Dr. Shailesh Karn', 
      spec: 'MS IN ORTHOPEDICS', 
      sub: 'Orthopaedics Department', 
      img: shaileshkarn 
    },
  ].map((doc, i) => (
    <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition">
      
      {/* Image Container with object-cover and top alignment */}
      <div className="w-full h-56 bg-gray-100 rounded-xl overflow-hidden mb-4">
        <img 
          src={doc.img} 
          alt={doc.name} 
          className="w-full h-full object-cover object-top" 
        />
      </div>

      <h4 className="font-bold text-lg text-[#5D241C]">{doc.name}</h4>
      <p className="text-[#E4002B] font-semibold text-sm">{doc.spec}</p>
      <p className="text-gray-500 text-sm mb-4">{doc.sub}</p>
      <div className="flex gap-3">
        <button className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-bold hover:bg-gray-50">View Details</button>
        <button className="flex-1 py-2 bg-[#F03A5A] text-white rounded-lg text-sm font-bold hover:bg-[#d12a47]">Book Now</button>
      </div>
    </div>
  ))}
</div>

    {/* View All Doctors Link */}
    <div className="text-center mt-12">
      <Link to="/doctors" className="text-[#5D241C] font-bold text-lg hover:text-[#E4002B] transition flex items-center justify-center gap-2">
        View All Doctors →
      </Link>
    </div>
  </div>
</section>

     {/* Responsive Appointment Booking Form */}
<section className="py-12 md:py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto bg-[#5D241C] rounded-3xl md:rounded-[3rem] p-6 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
      
      {/* Left Side: Content */}
      <div className="text-white flex-1 z-10 w-full text-center lg:text-left">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Ready for <br/><span className="text-[#E4002B]">Expert Care?</span>
        </h2>
        <p className="text-gray-200 text-base md:text-lg mb-6">
          Hamari expert doctors ki team aapki sewa ke liye tayar hai. Aasani se appointment book karein.
        </p>
        <div className="hidden lg:flex items-center gap-4 bg-white/10 p-4 rounded-2xl w-fit">
          <span className="text-2xl font-bold">24/7</span>
          <span className="text-sm text-gray-300">Trusted Purnea Healthcare</span>
        </div>
      </div>

      {/* Right Side: Form (Fully Responsive) */}
      <div className="w-full lg:w-[450px] bg-white p-6 md:p-10 rounded-2xl md:rounded-[2rem] shadow-xl z-10">
        <form className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Name</label>
            <input type="text" placeholder="John Doe" className="w-full p-3 md:p-4 mt-1 rounded-xl md:rounded-2xl bg-gray-100 border border-gray-200 outline-none focus:ring-2 focus:ring-[#E4002B]" />
          </div>
          
          <div>
            <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Mobile</label>
            <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full p-3 md:p-4 mt-1 rounded-xl md:rounded-2xl bg-gray-100 border border-gray-200 outline-none focus:ring-2 focus:ring-[#E4002B]" />
          </div>
          
          <div>
            <label className="text-xs font-bold text-gray-500 ml-1 uppercase">Specialist</label>
            {/* Updated dropdown with ALL doctors from the list */}
<select className="w-full p-3 md:p-4 mt-1 rounded-xl md:rounded-2xl bg-gray-100 border border-gray-200 outline-none text-gray-700 text-sm md:text-base">
  <option>Select Specialist / Doctor</option>
  <option>Dr. Suraj Ale (Anaesthesiology & Critical Care)</option>
  <option>Dr. Manish Shah (Anaesthesiology & Critical Care)</option>
  <option>Dr. Naresh Thapa Chhetri (Anaesthesiology & Critical Care)</option>
  <option>Dr. Niraj Thakur (Anaesthesiology & Critical Care)</option>
  <option>Dr. Purnendu Shekhar (Radiodiagnosis)</option>
  <option>Dr. Amit Kr. Jha (Cardiology)</option>
  <option>Dr. Tushar Kanti Sarkar (Critical Care & Emergency)</option>
  <option>Dr. Raja Radhika Raman (Neurosurgeon)</option>
  <option>Dr. Bijeeta Khadka (Gynaecology & Obstetrics)</option>
  <option>Dr. Shailesh Karn (Orthopaedics)</option>
  <option>Dr. Munindra Kumar (Nephrology)</option>
</select>
          </div>

          <button className="w-full bg-[#E4002B] text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-black transition-all shadow-lg mt-2">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
      {/* WhatsApp Floating Button */}
      <a 
  href="https://wa.me/919031859372" 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-20 right-6 bg-[#E4002B] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#b30022] transition-all text-sm font-bold z-50 border border-white/20"
>
  WhatsApp Us
</a>
    </div>
  );
};

export default Home;