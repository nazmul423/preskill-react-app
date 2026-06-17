import SectionTitle from '../components/common/SectionTitle';

const About = () => {
  return (
    <div className="pt-20 pb-32 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle subtitle="Our Mission" title="Building Future Tech Leaders" />
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              <span className="text-white font-bold">PreFuture Skill</span> is a leading platform dedicated to bridging the gap between traditional learning and modern tech demands.
            </p>
            <p>
              We specialize in Robotics, Artificial Intelligence, and Smart System design, providing hands-on experience that empowers students to innovate and stay ahead in the global tech race.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-cyan-500 font-black text-2xl">10K+</h4>
                <p className="text-[10px] uppercase font-bold tracking-widest">Active Students</p>
              </div>
              <div>
                <h4 className="text-cyan-500 font-black text-2xl">50+</h4>
                <p className="text-[10px] uppercase font-bold tracking-widest">Expert Mentors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-cyan-500/20 blur-2xl group-hover:bg-cyan-500/30 transition-all"></div>
          <div className="relative aspect-video bg-slate-900 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
             <span className="text-slate-700 font-black text-8xl opacity-20">PREFUTURE</span>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center text-black font-black">AI</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;