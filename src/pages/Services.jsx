import React from 'react';
import { Ambulance, Stethoscope, Activity, Microscope, Pill, ShieldAlert, CheckCircle } from 'lucide-react';

const servicesData = [
  { title: "24/7 Emergency", icon: <ShieldAlert size={40} />, desc: "Immediate critical care support round the clock. Har emergency mein hum aapke saath hain.", img: "https://images.unsplash.com/photo-1587732608053-912534575306?q=80&w=800" },
  { title: "Advanced ICU", icon: <Activity size={40} />, desc: "High-end monitoring and life-support systems. Safest care for critical patients.", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800" },
  { title: "Pathology Lab", icon: <Microscope size={40} />, desc: "Precise diagnostic results with modern technology. Accurate reports, sahi ilaaj ki pehli seedi.", img: "https://images.unsplash.com/photo-1579684385127-1ecd15d5bf88?q=80&w=800" },
  { title: "General Surgery", icon: <Stethoscope size={40} />, desc: "Expert surgical care for various conditions. Experienced surgeons, safe procedures.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" },
  { title: "Pharmacy", icon: <Pill size={40} />, desc: "All essential medicines available on-site. Genuine dawaayian, seedhe aapke paas.", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800" },
  { title: "Ambulance Service", icon: <Ambulance size={40} />, desc: "Swift patient transport with medical assistance. Tezi aur suraksha hamara pehla vadha.", img: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800" },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#5D241C] text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Medical Services</h1>
        <p className="text-xl opacity-90">"Purnea ki behtar swasthya suvidha, ab aapke paas"</p>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-[#E4002B] transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="text-[#E4002B] mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#5D241C] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Us Section */}
        <div className="bg-white p-12 rounded-3xl shadow-md flex flex-col lg:flex-row gap-12 items-center border-l-8 border-[#E4002B]">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#5D241C] mb-6">SMH kyun chune?</h2>
            <div className="space-y-4">
              {["Advanced Medical Technology", "Experienced Doctors ki Team", "Affordable Treatment Plans", "24/7 Patient Support"].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-[#E4002B]" />
                  <span className="font-semibold text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#5D241C] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="mb-6">Hamari team aapki madad ke liye hamesha taiyaar hai. Kuch bhi puchna ho toh call karein.</p>
            <a href="tel:9031859372" className="inline-block bg-[#E4002B] px-8 py-3 rounded-full font-bold">Call Now: 9031859372</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;