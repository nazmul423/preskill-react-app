import { Link } from "react-router-dom";

const NestedMenu = ({ items = [] }) => {
  return (
    <ul className="min-w-[220px]">
      {items.map((item) => (
        <li key={item.name} className="relative group">

          {item.path ? (
            <Link
              to={item.path}
              className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ) : (
            <span className="block px-4 py-2 text-white font-semibold">
              {item.name}
            </span>
          )}

          {item.children?.length > 0 && (
            <div className="absolute left-full top-0 hidden group-hover:block bg-[#0b101b] border border-white/10 shadow-xl">
              <NestedMenu items={item.children} />
            </div>
          )}

        </li>
      ))}
    </ul>
  );
};

export default NestedMenu;