import path from "path";
import { Link, useLocation } from "react-router-dom";

const MobileNavigation = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="md:hidden w-full bg-greenThird shadow-md">
      <div className="flex justify-around p-4 items-center">
        <Link to="/" className={`text-greenPrimary ${pathname === "/" || pathname === "/detail" ? "bg-white rounded-xl px-2 py-2" : "px-2 py-2"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#9BBD7E" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" className="w-9 h-9">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
        <Link to="/profile" className={`text-greenPrimary ${pathname === "/profile" ? "bg-white rounded-xl px-2 py-2" : "px-2 py-2"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#9BBD7E" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" className="w-9 h-9">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </Link>
        <Link to="/login" className={`text-greenPrimary ${pathname === "/login" && ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#9BBD7E" className="w-9 h-9">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
