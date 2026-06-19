

const Topbar = () => {
  return (
   <div className="fixed top-0 left-0 w-full h-8 z-[100]">
      {/* কন্টেইনারটিকে justify-center দিয়েছি যাতে এটি মাঝখানে থাকে */}
      <div className="flex justify-center items-center">
        
        <p className="text-[11px] md:text-[13px] font-black tracking-[0.1em] flex items-center">
          
          {/* Highlight Bangladesh - Centered Styled Box */}
          <span className="relative px-6 py-1 rounded-full font-extrabold text-white 
            bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 
            shadow-[0_0_20px_rgba(236,72,153,0.4)] animate-pulse overflow-hidden">
            
            সবার আগে বাংলাদেশ 

            {/* glow layer - এটি এখন relative parent এর ভেতরে থাকবে */}
            <span className="absolute inset-0 bg-white/20 blur-xl opacity-40 pointer-events-none"></span>
          </span>

        </p>
        
      </div>
    </div>
  );
};

export default Topbar;