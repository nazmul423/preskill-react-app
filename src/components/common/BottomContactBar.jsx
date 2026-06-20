import { Mail, MessageCircle } from 'lucide-react';

const BottomContactBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black text-white h-11 border-t border-zinc-800 z-[100] flex items-center shadow-[0_-5px_25px_rgba(0,0,0,0.6)]">
      
      <div className="w-full lg:w-[90%] mx-auto flex justify-between items-center px-4 h-full">
        
        {/* --- LEFT SIDE: WHATSAPP BUTTON --- */}
        <a 
          href="https://wa.me/01727642607" // আপনার নম্বরটি এখানে দিন
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] px-4 h-full transition-all group shrink-0"
        >
          <MessageCircle size={18} className="text-white fill-white/10 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-black uppercase tracking-widest text-white">WhatsApp</span>
        </a>

        {/* --- RIGHT SIDE: COUNTRIES & EMAIL --- */}
        <div className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar ml-6">
          
          {/* Bangladesh */}
          <div className="flex items-center gap-2 group cursor-pointer whitespace-nowrap">
            <img src="https://flagcdn.com/w20/bd.png" alt="BD" className="w-5 rounded-[2px]" />
            <span className="text-[11px] font-bold text-zinc-300 group-hover:text-cyan-400 transition-colors tracking-tight">
              +880 1711-XXXXXX
            </span>
          </div>

          {/* USA */}
          <div className="flex items-center gap-2 group cursor-pointer whitespace-nowrap">
            <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-5 rounded-[2px]" />
            <span className="text-[11px] font-bold text-zinc-300 group-hover:text-cyan-400 transition-colors tracking-tight">
              +1-307-683-1099
            </span>
          </div>

          {/* Canada */}
          <div className="flex items-center gap-2 group cursor-pointer whitespace-nowrap">
            <img src="https://flagcdn.com/w20/ca.png" alt="CA" className="w-5 rounded-[2px]" />
            <span className="text-[11px] font-bold text-zinc-300 group-hover:text-cyan-400 transition-colors tracking-tight">
              +1-613-555-0123
            </span>
          </div>

          {/* Email Section */}
          <div className="flex items-center gap-2 group cursor-pointer border-l border-zinc-800 pl-6 h-11 ml-2 whitespace-nowrap">
            <Mail size={15} className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
            <span className="text-[11px] font-black tracking-tight text-zinc-300 group-hover:text-cyan-400 transition-all uppercase">
              sales@prefuture.skill
            </span>
          </div>

        </div>
      </div>

      {/* Hide Scrollbar CSS */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default BottomContactBar;