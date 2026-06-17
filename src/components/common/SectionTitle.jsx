const SectionTitle = ({ subtitle, title, centered = false }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <span className="text-cyan-500 font-black text-[10px] uppercase tracking-[0.4em]">{subtitle}</span>
    <h2 className="text-3xl md:text-5xl font-black text-white mt-2 tracking-tighter uppercase">{title}</h2>
  </div>
);
export default SectionTitle;