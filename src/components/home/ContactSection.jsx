const ContactSection = () => {
  return (
    <section className="py-24 px-8 max-w-4xl mx-auto">
      <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-white/10 text-center shadow-2xl relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[80px] rounded-full" />
        
        <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Join the Future Today</h2>
        <p className="text-slate-400 mb-10 max-w-md mx-auto leading-relaxed">
          Ready to transform your career? Get in touch with our career counselors for a free consultation.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl outline-none focus:border-cyan-500 sm:w-80 text-sm transition-all" 
          />
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-8 py-4 rounded-xl uppercase text-xs tracking-widest transition-all">
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;