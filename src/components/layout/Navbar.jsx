import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Navbar = ({ enrolledCount = 0 }) => (
  <nav className="fixed w-full z-50 bg-[#030712]/70 backdrop-blur-xl border-b border-white/5 h-20 flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
      <Link to="/" className="text-2xl font-black text-white tracking-tighter">PRE<span className="text-cyan-500">FUTURE</span></Link>
      <div className="hidden md:flex space-x-10 text-[11px] font-bold uppercase tracking-widest text-slate-400">
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/courses" className="hover:text-cyan-400">Courses</Link>
        <Link to="/teachers" className="hover:text-cyan-400">Mentors</Link>
        <Link to="/contact" className="hover:text-cyan-400">Contact</Link>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative group cursor-pointer">
          <ShoppingBag size={20} className="group-hover:text-cyan-400 transition-colors" />
          {enrolledCount > 0 && <span className="absolute -top-2 -right-2 bg-cyan-500 text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black animate-pulse">{enrolledCount}</span>}
        </div>
        <button className="hidden sm:block text-xs font-bold uppercase tracking-widest border border-white/10 px-4 py-2 rounded hover:bg-white/5 transition">Portal</button>
      </div>
    </div>
  </nav>
);
export default Navbar;