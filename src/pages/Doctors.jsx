import React from 'react';
import { Phone, Calendar, Award } from 'lucide-react';

// Doctor Images Import ( apne assets folder ke anusaar extension check kar lena )
import suraj from '../assets/suraj.webp';
import manish from '../assets/manish.webp';
import naresh from '../assets/naresh.webp';
import niraj from '../assets/niraj.webp';
import chandan from '../assets/chandan.webp';
import rajkumar from '../assets/rajkumar.webp';
import purendu from '../assets/purendu.webp';
import amit from '../assets/amit.webp';
import tushar from '../assets/tushar.webp';
import raja from '../assets/raja.webp';
import bijeeta from '../assets/bijeeta.webp';
import shaileshkarn from '../assets/shaileshkarn.webp';
import shaileshsingh from '../assets/shaileshsingh.webp';

const doctorsData = [
  { name: 'Dr. Tushar Kanti Sarkar', spec: 'MBBS, CCEBDM (CMO)', img: tushar },
  { name: 'Dr. Suraj Ale', spec: 'Anaesthesiology & Critical Care', img: suraj },
  { name: 'Dr. Manish Shah', spec: 'Anaesthesiology & Critical Care', img: manish },
  { name: 'Dr. Naresh Thapa Chhetri', spec: 'Anaesthesiology & Critical Care', img: naresh },
  { name: 'Dr. Niraj Thakur', spec: 'Anaesthesiology & Critical Care', img: niraj },
  { name: 'Dr. Chandan Kumar', spec: 'Anaesthesiology & Critical Care', img: chandan },
  { name: 'Dr. Raj Kumar Raj', spec: 'M.B.B.S, M.S, M.ch (Neurosurgery)', img: rajkumar },
  { name: 'Dr. Purnendu Shekhar', spec: 'MBBS, DNB Radiodiagnosis', img: purendu },
  { name: 'Dr. Amit Kr. Jha', spec: 'DM (Cardiology)', img: amit },
  { name: 'Dr. Raja Radhika Raman', spec: 'MCh Neurosurgery, PGI Chandigarh', img: raja },
  { name: 'Dr. Bijeeta Khadka', spec: 'MS Gynaecology & Obstetrics', img: bijeeta },
  { name: 'Dr. Shailesh Karn', spec: 'MS IN Orthopaedics', img: shaileshkarn },
  { name: 'Dr. Shailesh Kumar Singh', spec: 'MS (General & Laparoscopic Surgeon)', img: shaileshsingh },
];

const Doctors = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#5D241C] text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Medical Experts</h1>
        <p className="text-xl opacity-90">"Purnea ke sabse behtar aur anubhavi doctors aapki seva mein"</p>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {doctorsData.map((doc, i) => (
            <div key={i} className="group bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-2xl hover:border-[#E4002B] transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between">
              
              <div>
                {/* Individual Doctor Image Container */}
                <div className="w-full h-56 bg-gray-100 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={doc.img} 
                    alt={doc.name} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#5D241C] mb-2">{doc.name}</h3>
                  <p className="text-[#E4002B] font-medium text-sm mb-6 bg-red-50 py-1.5 px-3 rounded-full inline-block">{doc.spec}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="tel:9031859372" className="flex-1 py-2.5 border-2 border-[#5D241C] text-[#5D241C] rounded-xl font-bold hover:bg-[#5D241C] hover:text-white transition flex items-center justify-center text-sm">
                  <Phone size={16} className="mr-2" /> Call
                </a>
                <a href="#appointment-section" className="flex-1 py-2.5 bg-[#E4002B] text-white rounded-xl font-bold hover:bg-[#c40025] transition flex items-center justify-center text-sm">
                  <Calendar size={16} className="mr-2" /> Book
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
      
      {/* Appointment Section */}
      <div id="appointment-section" className="py-20 bg-[#5D241C]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-[#5D241C] mb-4">Book Your Appointment</h2>
              <p className="text-gray-600 mb-6">Purnea ke best doctors ke saath apna consultation aaj hi fix karein. Sahi ilaaj, sahi samay par.</p>
              <div className="flex items-center gap-4 text-[#E4002B] font-bold">
                <Award /> 15+ Years Experience Specialists
              </div>
            </div>
            <form className="flex-1 w-full space-y-4">
              <input type="text" placeholder="Patient Full Name" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#E4002B] outline-none" />
              <input type="tel" placeholder="Mobile Number" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#E4002B] outline-none" />
              <select className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 outline-none">
                <option>Select Doctor</option>
                {doctorsData.map((d, i) => <option key={i}>{d.name}</option>)}
              </select>
              <button className="w-full bg-[#E4002B] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#c40025] transition shadow-lg">Confirm Booking</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;