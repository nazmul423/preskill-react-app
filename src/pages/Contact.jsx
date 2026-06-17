import ContactSection from '../components/home/ContactSection';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8 mb-16">
        {/* Contact Info Cards */}
        {[
          { icon: Mail, label: "Email Us", val: "info@prefuture.skill" },
          { icon: Phone, label: "Call Us", val: "+1 (555) 000-TECH" },
          { icon: MapPin, label: "Location", val: "Innovation Hub, SF" }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 text-center hover:border-cyan-500/30 transition-all">
            <item.icon className="mx-auto mb-4 text-cyan-500" size={24} />
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">{item.label}</h4>
            <p className="text-white font-bold">{item.val}</p>
          </div>
        ))}
      </div>
      
      <ContactSection />
    </div>
  );
};

export default Contact;