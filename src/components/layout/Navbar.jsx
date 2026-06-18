import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';

const Navbar = ({ courses = [], enrolledIds = [] }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart Drawer State

  // এনরোল করা কোর্সগুলো ফিল্টার করা
  const enrolledCourses = courses.filter(course => enrolledIds.includes(course.id));

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Mentors", path: "/teachers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full z-[100] bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="text-2xl font-black text-white tracking-tighter">
            PRE<span className="text-cyan-500">FUTURE</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-10 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hover:text-cyan-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center gap-4">
            
            {/* Shopping/Enrollment Bag Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative group p-2 outline-none"
            >
              <ShoppingBag size={22} className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
              {enrolledIds.length > 0 && (
                <span className="absolute top-0 right-0 bg-cyan-500 text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  {enrolledIds.length}
                </span>
              )}
            </button>

            {/* HAMBURGER BUTTON (Mobile) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-cyan-400 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* PORTAL BUTTON */}
            <button className="hidden md:block text-[10px] font-black uppercase tracking-widest border border-white/10 px-5 py-2.5 rounded-md hover:bg-white/5 transition-all">
              Portal
            </button>
          </div>
        </div>
      </nav>

      {/* --- ENROLLED COURSES DRAWER (Cart) --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)} />
      )}
      
      <div className={`fixed top-0 right-0 h-screen w-full max-w-[380px] bg-[#030712] border-l border-white/10 z-[120] transform transition-transform duration-500 ease-in-out ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-xl font-bold text-white">My Learning</h2>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Enrolled: {enrolledIds.length}</p>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* List of Enrolled Courses */}
          <div className="flex-1 overflow-y-auto space-y-5 pr-2 custom-scrollbar">
            {enrolledCourses.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={40} className="mx-auto mb-4 text-slate-800" />
                <p className="text-slate-500 text-sm italic">No courses enrolled yet.</p>
              </div>
            ) : (
              enrolledCourses.map(course => (
                <div key={course.id} className="group bg-white/5 border border-white/5 p-4 rounded-2xl flex gap-4 hover:border-cyan-500/30 transition-all">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800">
                    <img src={course.image} className="w-full h-full object-cover opacity-80" alt="" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white font-bold text-sm line-clamp-1">{course.title}</h4>
                    <span className="text-emerald-500 text-[10px] font-black flex items-center gap-1 mt-1 uppercase tracking-tighter">
                      <CheckCircle size={12} /> Access Granted
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <button className="w-full mt-8 bg-cyan-500 text-black font-black py-4 rounded-xl uppercase text-[10px] tracking-widest hover:bg-cyan-400 transition-all shadow-[0_10px_20px_rgba(6,182,212,0.2)] flex items-center justify-center gap-2">
            Dashboard <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU SIDEBAR (Existing) --- */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] transition-opacity md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)}></div>
      
      <div className={`fixed top-0 right-0 h-screen w-3/4 max-w-75 bg-[#030712] border-l border-white/10 z-[120] transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-end mb-10">
            <button onClick={() => setIsOpen(false)} className="text-slate-400"><X size={32} /></button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-bold uppercase tracking-widest text-slate-300 hover:text-cyan-500 transition-colors border-b border-white/5 pb-3">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <button className="w-full bg-cyan-500 text-black font-black py-4 rounded-xl uppercase text-xs tracking-widest">Portal Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;