import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize with your Public Key
emailjs.init("MPTHjDuxJI_HAJMZt");

const doctorsList = [
  "Dr. Suraj Ale (Anaesthesiology & Critical Care)",
  "Dr. Manish Shah (Anaesthesiology & Critical Care)",
  "Dr. Naresh Thapa Chhetri (Anaesthesiology & Critical Care)",
  "Dr. Niraj Thakur (Anaesthesiology & Critical Care)",
  "Dr. Purnendu Shekhar (Radiodiagnosis)",
  "Dr. Amit Kr. Jha (Cardiology)",
  "Dr. Tushar Kanti Sarkar (Critical Care & Emergency)",
  "Dr. Raja Radhika Raman (Neurosurgeon)",
  "Dr. Bijeeta Khadka (Gynaecology & Obstetrics)",
  "Dr. Shailesh Karn (Orthopaedics)",
  "Dr. Munindra Kumar (Nephrology)"
];

const Appointment = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', doctor: '', msg: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Template variables (Ye tumhare EmailJS Template mein hone chahiye)
    const templateParams = {
      user_name: formData.name,
      user_phone: formData.phone,
      appointment_date: formData.date,
      doctor_name: formData.doctor,
      message: formData.msg,
    };

    // Yahan apni IDs daalo
    // 1. EmailJS Dashboard -> Email Services -> ID copy karo
    // 2. EmailJS Dashboard -> Email Templates -> ID copy karo
    emailjs.send('service_sghh_purnea', 'template_booking_smh', templateParams)
      .then(() => {
        setStatus("✅ Booking Confirmed! Hamari team jald hi aapse contact karegi.");
        setFormData({ name: '', phone: '', date: '', doctor: '', msg: '' });
      }, (err) => {
        console.error("EmailJS Error:", err);
        setStatus("❌ Error! ID check karein ya 9031859372 par call karein.");
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Eye-catching Heading */}
        <div className="text-center mb-12">
          <span className="bg-[#E4002B]/10 text-[#E4002B] font-bold px-4 py-1 rounded-full text-sm">24/7 SUPPORT AVAILABLE</span>
          <h1 className="text-5xl font-extrabold text-[#5D241C] mt-4 mb-6">Book An Expert Consultation</h1>
          <p className="text-gray-600 text-lg">Purnea ke best experts ke saath apna appointment schedule karein. Sahi ilaaj, sahi samay par.</p>
        </div>

        {/* Form Box */}
        <div className="bg-[#5D241C] rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E4002B] rounded-full blur-[100px] opacity-30"></div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 relative z-10">
            <input type="text" required className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 ring-[#E4002B]" placeholder="Patient Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="tel" required className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 ring-[#E4002B]" placeholder="Mobile Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            <input type="date" required className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 ring-[#E4002B]" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
            <select required className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white outline-none focus:ring-2 ring-[#E4002B]" value={formData.doctor} onChange={(e) => setFormData({...formData, doctor: e.target.value})}>
              <option className="text-gray-900" value="">Select Specialist Doctor</option>
              {doctorsList.map((doc, i) => <option key={i} className="text-gray-900" value={doc}>{doc}</option>)}
            </select>
            <textarea rows="3" className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-300 md:col-span-2 outline-none focus:ring-2 ring-[#E4002B]" placeholder="Describe your health concerns..." value={formData.msg} onChange={(e) => setFormData({...formData, msg: e.target.value})}></textarea>
            
            <button type="submit" className="md:col-span-2 w-full bg-[#E4002B] hover:bg-white hover:text-[#E4002B] text-white py-5 rounded-2xl font-bold text-xl transition-all shadow-lg border-2 border-[#E4002B]">
              Confirm Booking Appointment
            </button>
          </form>
          
          {/* Status Message */}
          {status && <p className={`mt-6 text-center font-bold py-4 rounded-2xl ${status.includes('✅') ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'}`}>{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Appointment;