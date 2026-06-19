import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const FlyoutMenu = ({ items = [], isRoot = false }) => {
  return (
    <ul className={`
      ${isRoot ? "top-full left-0 mt-4 border-t-4 border-orange-600" : "top-0 left-full ml-[1px]"} 
      absolute bg-[#111827] border border-white/10 py-2 min-w-[240px] shadow-2xl hidden group-hover:block z-50
    `}>
      {items.map((item) => (
        <li key={item.name} className="relative group/side">
          
          {item.path ? (
            <Link
              to={item.path}
              className="flex items-center justify-between px-5 py-2.5 text-[13px] font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all"
            >
              {item.name}
            </Link>
          ) : (
            <div className="flex items-center justify-between px-5 py-2.5 text-[13px] font-bold text-white cursor-default hover:bg-white/5">
              {item.name}
              {item.children && <ChevronRight size={14} className="text-slate-500" />}
            </div>
          )}

          {/* নেস্টেড সাব-মেনু (Hover flyout) */}
          {item.children?.length > 0 && (
            <FlyoutMenu items={item.children} isRoot={false} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default FlyoutMenu;