import SectionTitle from '../common/SectionTitle';

const Testimonials = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto">
      <SectionTitle subtitle="Success Stories" title="Student Experiences" centered />
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {[1, 2].map(i => (
          <div key={i} className="p-10 rounded-2xl bg-white/[0.03] border border-white/5 relative">
            <span className="text-6xl text-cyan-500/20 absolute top-4 left-6 font-serif">"</span>
            <p className="text-slate-300 italic text-lg leading-relaxed relative z-10 mb-8">
              "The hands-on training in Robotics at PreFuture Skill was exceptional. I went from zero knowledge to building my own automation models in just 8 weeks."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full" />
              <div>
                <h5 className="text-white font-bold text-sm uppercase">John Doe</h5>
                <p className="text-cyan-500 text-[10px] font-black uppercase">Embedded Developer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;