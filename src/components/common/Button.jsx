const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const styles = {
    primary: 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]',
    outline: 'border border-white/20 hover:bg-white/10 text-white',
    ghost: 'text-slate-500 hover:text-white'
  };
  return (
    <button className={`px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide transition-all active:scale-95 ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;