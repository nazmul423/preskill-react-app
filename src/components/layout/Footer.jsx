const Footer = () => (
  <footer className="bg-[#030712] border-t border-white/5 py-12 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <h3 className="text-xl font-black text-white mb-4">PREFUTURE SKILL</h3>
        <p className="text-slate-500 text-sm max-w-sm">The world's leading AI-powered technical skill platform. Building the creators of tomorrow.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-sm uppercase">Quick Links</h4>
        <ul className="text-slate-500 text-sm space-y-3">
          <li>Curriculum</li>
          <li>Certification</li>
          <li>Scholarships</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 text-sm uppercase">Newsletter</h4>
        <div className="flex gap-2">
          <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 px-3 py-2 rounded text-xs w-full focus:border-cyan-500 outline-none" />
          <button className="bg-cyan-500 text-black px-4 py-2 rounded text-[10px] font-black">JOIN</button>
        </div>
      </div>
    </div>
    <p className="text-center text-slate-700 text-[10px] mt-20 uppercase tracking-[0.3em]">© 2024 PreFuture Skill. Powered by Intelligence.</p>
  </footer>
);
export default Footer;