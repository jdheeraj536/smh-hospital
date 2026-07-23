import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, HeartPulse, Clock, Ambulance, Stethoscope, Microscope } from 'lucide-react';
import hospitalImg1 from '../assets/hospital1.webp';
import tushar from '../assets/tushar.webp';
import chandan from '../assets/chandan.webp';
import rajkumar from '../assets/rajkumar.webp';

const About = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#5D241C] text-white py-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About SMH Care of Life</h1>
        <p className="text-lg md:text-xl opacity-90 italic">"Purnea ka bharosa, swasthya mein hamara vaada"</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Hospital Overview Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-white p-6 md:p-8 rounded-3xl shadow-lg">
         <div className="w-full overflow-hidden rounded-2xl mb-6">
          <img 
             src={hospitalImg1} 
            alt="SMH Hospital" 
            className="w-full aspect-video md:aspect-auto md:h-[400px] object-cover" 
           />
        </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D241C] mb-6">Purnea ka Modern Healthcare Center</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SMH Care of Life ki shuruat sirf ek maksad se hui thi – Purnea ke logon ko unke hi sheher mein world-class medical suvidha dena. Aaj, hum ek multispecialty center ke roop mein khade hain jahan latest technology aur compassionate doctors har kadam par aapke saath hain.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Humne apni journey mein hamesha patient ki safety aur trust ko priority di hai. Chahe emergency ho ya routine check-up, SMH aapka bharosemand saathi hai.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="border-l-4 border-[#E4002B] pl-8 bg-white p-8 rounded-r-xl shadow-sm">
            <h2 className="text-3xl font-bold text-[#5D241C] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Purnea ke har nagrik ko sasti aur behtar swasthya suvidha pradan karna. Technology aur compassion ka sahi mel laakar har mariz ko sahi ilaaj dena.
            </p>
          </div>
          <div className="border-l-4 border-[#5D241C] pl-8 bg-white p-8 rounded-r-xl shadow-sm">
            <h2 className="text-3xl font-bold text-[#5D241C] mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              Ek aise healthcare system ka nirmaan jahan kisi ko bhi ilaaj ke liye bade shehron ki taraf na bhagna pade. Quality care, aapke sheher Purnea mein.
            </p>
          </div>
        </div>

        {/* Core Facilities */}
        <h2 className="text-3xl font-bold text-center text-[#5D241C] mb-12">Why Choose SMH Care of Life?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { icon: <Clock size={40} />, title: "24/7 Available", desc: "Har samay aapki seva mein" },
            { icon: <HeartPulse size={40} />, title: "Modern Tech", desc: "Advanced medical tools" },
            { icon: <Users size={40} />, title: "Expert Team", desc: "Highly skilled doctors" },
            { icon: <Award size={40} />, title: "Affordable", desc: "Sabke liye sasti care" },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 border bg-white rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="text-[#E4002B] flex justify-center mb-4">{item.icon}</div>
              <h4 className="font-bold text-[#5D241C] mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Doctor Team Section */}
<div className="mb-20">
  <h2 className="text-4xl font-bold text-center text-[#5D241C] mb-12">Hamare Expert Doctors</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      { name: 'Dr. Tushar Kanti Sarkar', spec: 'MBBS, CCEBDM (CMO)', img: tushar },
      { name: 'Dr. Chandan Kumar', spec: 'Anaesthesiology & Critical Care', img: chandan },
      { name: 'Dr. Raj Kumar Raj', spec: 'M.B.B.S, M.S, M.ch (Neurosurgery)', img: rajkumar },
    ].map((doc, i) => (
      <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center border-b-4 border-[#E4002B] hover:shadow-2xl transition-all duration-300">
        
        {/* Image Container */}
        <div className="w-full h-64 bg-gray-100 rounded-xl mb-4 overflow-hidden">
          <img 
            src={doc.img} 
            alt={doc.name} 
            className="w-full h-full object-cover object-top" 
          />
        </div>

        <h4 className="font-bold text-xl text-[#5D241C]">{doc.name}</h4>
        <p className="text-[#E4002B] font-medium mt-1">{doc.spec}</p>
        {doc.exp && <p className="text-gray-500 text-sm mt-2">{doc.exp} Experience</p>}
      </div>
    ))}
  </div>
  <div className="text-center mt-12">
    <Link to="/doctors" className="inline-block bg-[#5D241C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E4002B] transition-all">View All Doctors</Link>
  </div>
</div>

        {/* Commitment Section */}
        <div className="bg-[#E4002B] text-white p-8 md:p-12 rounded-3xl text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Hamara Vaada</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            SMH Hospital sirf ek building nahi, balki Purnea ke logon ka ek bharosa hai. Hum har saans aur har pal ke liye aapke saath khade hain.
          </p>
          <a href="/appointment" className="inline-block bg-white text-[#E4002B] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">Book an Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default About;