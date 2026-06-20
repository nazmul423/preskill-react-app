const SectionTitle = ({ subtitle, title, centered = false }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    {/* সাবটাইটেল সায়ান কালার সব মোডেই ভালো দেখায় */}
    <span className="text-cyan-500 font-black text-[10px] uppercase tracking-[0.4em]">
      {subtitle}
    </span>
    
    {/* টাইটেল: লাইট মোডে স্লেট-৯০০ এবং ডার্ক মোডে সাদা */}
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-2 tracking-tighter uppercase transition-colors duration-300">
      {title}
    </h2>
  </div>
);

export default SectionTitle;