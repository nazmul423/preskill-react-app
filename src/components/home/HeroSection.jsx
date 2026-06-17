import PreSkillImg from '../../assets/PreSkill.jpeg';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Banner */}
      <img 
        src={PreSkillImg} 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        alt="PreFuture Skill Banner" 
      />
      
      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030712] to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-8 relative z-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            Future Ready Platform
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-6 tracking-tighter">
            Skill Smart.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Stay Ahead.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed">
            Master AI, Robotics, and Smart Systems with professional certification. Empowering minds for a smarter tomorrow.
          </p>
          <div className="flex gap-4">
            <Button>Explore Courses</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;