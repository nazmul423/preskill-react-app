import { NavLink } from 'react-router-dom';

const Languages = () => {
  // ডাটা অ্যারে
  const languageData = [
    { code: 'US', name: 'English', flag: 'us' },
    { code: 'BD', name: 'বাংলা', flag: 'bd' },
    { code: 'FR', name: 'French', flag: 'fr' },
    { code: 'JP', name: 'Japanese', flag: 'jp' },
    { code: 'DE', name: 'German', flag: 'de' },
  ];

  return (
    <div className="relative inline-block group font-sans">
      {/* মেইন বাটন */}
      <button className="flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white rounded cursor-pointer transition-all hover:bg-white/20">
        <span className="text-lg">🌐</span> 
        <span className="text-[16px]">Language</span>
      </button>

      {/* ড্রপডাউন মেনু (Hover করলে group-hover:block এর মাধ্যমে দেখাবে) */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-60 bg-white rounded shadow-2xl hidden group-hover:block z-50 py-2 transition-all">
        
        {/* উপরের ছোট অ্যারো (Triangle) */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white"></div>
        
        {/* লুপের মাধ্যমে ডাটা রেন্ডার */}
        {languageData.map((item, index) => (
          <NavLink 
            key={index} 
            to="#" 
            className="flex items-center px-5 py-3 no-underline transition-colors hover:bg-blue-50 group/item"
          >
            {/* ল্যাঙ্গুয়েজ কোড (যেমন: US, BD) */}
            <span className="w-8 text-[11px] font-bold text-gray-500 uppercase">
              {item.code}
            </span>
            
            {/* ফ্ল্যাগ আইকন */}
            <img 
              src={`https://flagcdn.com/w20/${item.flag}.png`} 
              alt={item.name} 
              className="w-5 h-3.5 mx-4 rounded-sm object-cover shadow-sm"
            />

            {/* ল্যাঙ্গুয়েজ নাম (বোল্ড টেক্সট) */}
            <span className="flex-1 text-[17px] font-extrabold text-slate-800 tracking-tight">
              {item.name}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Languages;