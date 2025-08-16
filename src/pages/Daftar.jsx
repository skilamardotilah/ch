import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setRegistered } from "../utils/auth";
import Button from "../components/Button.jsx";
import Logo from "../assets/img/Logo.png";
import Bg from "../assets/img/background-chill.jpg";

export default function Daftar() {
  const nav = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDaftar = (e) => {
    e.preventDefault();
    setRegistered();
    nav("/masuk");
  };

  return (
    <div
      className="bg-black bg-cover bg-center min-h-[calc(100vh-8rem)] flex items-center justify-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="w-[306px] sm:w-[529px] p-6 sm:p-10 rounded-[8px] sm:rounded-[16px] bg-[#181A1CD6] flex flex-col gap-[20px] sm:gap-[37px]">
        <div className="flex justify-center">
          <img src={Logo} alt="CHILL Logo" className="w-[163px] h-[44px]" />
        </div>

        <div className="text-center flex flex-col gap-[8px]">
          <h2 className="text-white text-xl sm:text-2xl font-semibold">
            Daftar
          </h2>
          <p className="text-white text-sm sm:text-base opacity-70">
            Selamat datang!
          </p>
        </div>

        <div className="flex flex-col gap-[6px] w-full sm:w-[449px]">
          <label className="text-white text-sm sm:text-base">Username</label>
          <input
            type="text"
            placeholder="Masukkan username"
            className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white placeholder-white/50 focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-[12px] w-full sm:w-[449px]">
          <label className="text-white text-sm sm:text-base">Kata Sandi</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white placeholder-white/50 focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPass((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white opacity-70"
            >
              👁
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[6px] w-full sm:w-[449px]">
          <label className="text-white text-sm sm:text-base">
            Konfirmasi Kata Sandi
          </label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              className="w-full px-4 py-2 rounded-full bg-transparent border border-white text-white placeholder-white/50 focus:outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white opacity-70"
            >
              👁
            </button>
          </div>
        </div>

        <div className="text-xs sm:text-sm w-full sm:w-[449px] text-white/50">
          Sudah punya akun?{" "}
          <Link
            to="/masuk"
            className="text-white underline-offset-4 hover:underline"
          >
            Masuk
          </Link>
        </div>

        <div className="flex flex-col gap-[8px] w-full sm:w-[449px]">
          <button
            className="w-full py-2 bg-white text-black rounded-full font-semibold"
            onClick={handleDaftar}
          >
            Daftar
          </button>
          <div className="text-center text-white opacity-70">Atau</div>
          <button className="w-full py-2 bg-transparent text-white border border-white rounded-full flex items-center justify-center gap-2">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Icon"
              className="w-5 h-5"
            />
            Daftar dengan Google
          </button>
        </div>
      </div>
    </div>
  );
}
