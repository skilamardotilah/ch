import { logout, isLoggedIn } from "../utils/auth";

import { Link, useNavigate } from "react-router-dom";
const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href;

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full mx-auto h-[94px] flex items-center justify-between px-5 md:px-20 py-[25px] bg-[#0F0F0F] text-white">
      <div className="flex items-center gap-[12px] w-[268px] h-[44px] md:gap-[80px] md:w-[520px] md:h-[44px]">
        <div className="flex items-center gap-[4px] w-auto h-[44px]">
          <img
            src={asset("img/movie.png")}
            alt="Chill Logo"
            className="w-[29.55px] h-[26px] mr-2 md:mr-0"
          />
          <span className="hidden md:inline text-[32px] leading-[55px] font-normal font-['Londrina_Solid']">
            CHILL
          </span>
        </div>
        <div className="flex items-center space-x-4 md:space-x-8 text-white text-[14px] md:text-[18px] font-medium">
          <a href="#" className="hover:text-gray-400">
            Series
          </a>
          <a href="#" className="hover:text-gray-400">
            Film
          </a>
          <a
            href="#"
            className="hover:text-gray-400 min-w-[80px] tracking-[0.2px] text-center"
          >
            Daftar Saya
          </a>
        </div>
      </div>

      <div className="relative group ml-auto">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={asset("img/avatar.png")}
            alt="Profile"
            className="rounded-full"
            style={{ width: 40, height: 40 }}
          />
          <img
            src={asset("img/arrow-down.png")}
            alt="Down Arrow"
            className="w-[14px] h-[8.645px]"
          />
        </div>
        <div className="absolute right-0 mt-2 w-48 bg-[#141414] border border-gray-700 rounded-md shadow-lg hidden group-hover:block z-50">
          <Link
            to="/profil"
            className="flex items-center px-4 py-3 hover:bg-gray-800 text-white hover:text-blue-500"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 1116 0H2z" />
            </svg>
            Profil Saya
          </Link>
          <Link
            to="/premium"
            className="flex items-center px-4 py-3 hover:bg-gray-800 text-white hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273 -4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
            Ubah Premium
          </Link>
          <Link
            to="/keluar"
            className="flex items-center px-4 py-3 hover:bg-gray-800 text-white hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
            Keluar
          </Link>
        </div>
      </div>
    </nav>
  );
}
