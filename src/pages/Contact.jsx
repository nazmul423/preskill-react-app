import ContactSection from '../components/home/ContactSection';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    // মেইন কন্টেইনারে লাইট মোডের ব্যাকগ্রাউন্ড যোগ করা হয়েছে
    <div className="pt-20 bg-white dark:bg-transparent transition-colors duration-500 min-h-screen">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8 mb-16">
        {/* Contact Info Cards */}
        {[
          { icon: Mail, label: "Email Us", val: "info@prefuture.skill" },
          { icon: Phone, label: "Call Us", val: "+8801727642607" },
          { icon: MapPin, label: "Location", val: "Innovation Hub, Manikganj" }
        ].map((item, i) => (
          // কার্ডের ব্যাকগ্রাউন্ড ও বর্ডার লাইট মোডের জন্য ডাইনামিক করা হয়েছে
          <div key={i} className="p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-center hover:border-cyan-500/30 transition-all shadow-sm dark:shadow-none">
            <item.icon className="mx-auto mb-4 text-cyan-500" size={24} />
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">{item.label}</h4>
            {/* টেক্সট কালার লাইট মোডে ডার্ক স্লেট করা হয়েছে */}
            <p className="text-slate-900 dark:text-white font-bold">{item.val}</p>
          </div>
        ))}
      </div>
      
      <ContactSection />
    </div>
  );
};

export default Contact;