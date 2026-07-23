import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#5D241C] text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact SMH Hospital</h1>
        <p className="text-xl opacity-90">"Hum hamesha aapki seva mein tatpar hain"</p>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Details & Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#5D241C]">Get In Touch</h2>
            <p className="text-gray-600">Kisi bhi emergency ya consultation ke liye humse sampark karein.</p>
            
            <div className="space-y-6">
              {[
                { icon: <MapPin />, title: "Address", desc: "Rambagh Road, Line Bazar, Purnea, Bihar - 854301" },
                { icon: <Phone />, title: "Phone Number", desc: "+91 90318 59372" },
                { icon: <Mail />, title: "Email Address", desc: "shrimamahalhopehospital@gmail.com" },
                { icon: <Clock />, title: "Working Hours", desc: "24/7 Emergency Services Available" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-[#E4002B] mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-[#5D241C]">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#5D241C] mb-6">Send Us A Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#E4002B]" />
              <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#E4002B]" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:ring-2 focus:ring-[#E4002B]"></textarea>
              <button className="w-full bg-[#E4002B] text-white py-4 rounded-xl font-bold hover:bg-[#c40025] transition shadow-lg">Send Message</button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
            <p className="text-gray-500 font-medium">Google Maps Integration Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;