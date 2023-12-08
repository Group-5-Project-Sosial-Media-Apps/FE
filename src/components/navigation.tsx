import NYampah from "@/assets/NYampah.svg";

import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const { pathname } = location;
  const activeElementClasses = `bg-white rounded-full`;
  const nonActiveElementClasses = "hover:bg-white transition duration-300 ease-in-out rounded-full";
  console.log(pathname);

  return (
    <div className="hidden md:flex bg-greenThird shadow-md shadow-greenPrimary rounded-r-md max-w-xs h-screen">
      <div className="h-full flex flex-col justify-center items-center">
        <img className="py-4 px-4 w-80 h-40" src={NYampah} />
        <div className="my-10">
          <div className="flex gap-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/8d45/fb06/124031e8cbb9e0f5ce05f2193bef2a8e?Expires=1702857600&Signature=kvtA1Oxig4LJQetIqrRqx5ucTdBgOSCqe5ryJG4Pbg4GJwvaaT3YjO~6SrMzuDEBj0NiVgk6RSkko~7ZgC43XQy2efq4IIU7mw7s-PulLBpKgY7wQDfetK6vz9BqUnEYeif2UXRD5hizhK1lQMBO3-QNt2FAxLAtOi0NjihHQo1A4RU3P3cjjtK1lQVw4NXnrVBs80-xcdGX7db5bzHTFxToJTnXAboJe0RS7R6JvmPehizZfHQL8a1uxd9AVLw0sfa3937UbbTo-ha2m~QjTziPAR2GcKlrKuyld0LRSXefNK9y8VwcLkwDVwcS1SVDfVe9U~7j~TFxT1SwSAhkTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex flex-col justify-center gap-1">
              <div className="font-semibold text-xl">Nama</div>
              <div className="text-lg text-greenPrimary">@username</div>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-between">
          <div>
            <Link to="/" className={`flex gap-5 my-6 text-xl font-bold text-greenPrimary px-24 py-3 ${pathname === "/" ? activeElementClasses : nonActiveElementClasses}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#9BBD7E" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" className="w-6 h-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p className="">Home</p>
            </Link>
            <Link to="/profile" className={`flex  gap-5 my-6 text-xl font-bold text-greenPrimary px-24 py-3 ${pathname === "/profile" ? activeElementClasses : nonActiveElementClasses}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#9BBD7E" viewBox="0 0 24 24" stroke-width="0" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <p>Profile</p>
            </Link>
          </div>
          <Link to="/login" className="flex gap-5 my-6 text-xl font-bold text-greenPrimary px-24 py-3   hover:bg-white transition duration-300 ease-in-out rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#9BBD7E" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            <p className="">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
