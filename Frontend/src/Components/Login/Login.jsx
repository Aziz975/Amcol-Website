import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to your login API
    console.log(formData);
  };

  const handleGoogleLogin = () => {
    // TODO: connect Google sign-in
    console.log("Continue with Google");
  };

  return (
    <main className="min-h-screen w-full bg-[#fdfdfd] pb-16">
      {/* ================= PAGE TITLE BAR ================= */}
      <div className="w-full border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="mx-auto flex max-w-[925px] items-center justify-between px-4 py-5 sm:px-8 lg:px-0">
          <h1 className="font-serif text-[22px] font-normal text-[#777]">
            Login to AMCOL Hardware
          </h1>
          <p className="text-[11px] text-[#aaa]">Login</p>
        </div>
      </div>

      <div className="mx-auto max-w-[925px] px-4 sm:px-8 lg:px-0">
        {/* ================= LOGIN CARD ================= */}
        <div className="mx-auto mt-5 min-h-[620px] w-full max-w-[470px] rounded-[18px] bg-white px-[22px] pt-[18px] pb-10">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="images/amcolstar.png"
              alt="AMCOL Hardware"
              className="h-[55px] w-[55px] object-contain"
            />
          </div>

          {/* Heading */}
          <h2 className="mt-2 text-center font-serif text-[28px] font-bold leading-tight text-[#333]">
            Welcome to AMCOL Hardware
          </h2>

          <p className="mt-5 text-center text-[12px] text-[#555]">
            Please log in or sign up to unlock and use all features of the site.
          </p>

          {/* ================= LOGIN FORM ================= */}
          <form onSubmit={handleSubmit} className="mt-[17px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="h-[40px] w-full border border-[#e5e5e5] bg-white px-3 text-center text-[12px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#ff1935]"
              required
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="mt-[5px] h-[40px] w-full border border-[#e5e5e5] bg-white px-3 text-center text-[12px] text-[#333] outline-none placeholder:text-[#777] focus:border-[#ff1935]"
              required
            />

            <button
              type="submit"
              className="mx-auto mt-[5px] block h-[40px] w-full max-w-[262px] rounded-[4px] bg-[#db1f40] text-[15px] text-white transition-colors hover:bg-[#c90020]"
            >
              Log In
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-[12px] text-[#e0203a] transition-colors hover:text-[#c90020]"
            >
              Forgot Password?
            </Link>
          </div>

          {/* ================= DIVIDER ================= */}
          <div className="mt-3 border-y border-[#555] py-[2px] text-center text-[12px] font-bold text-[#555]">
            Or If You Don&apos;t Have an Account Yet?
          </div>

          {/* ================= SIGN UP ================= */}
          <Link
            to="/signup"
            className="mx-auto mt-[14px] flex h-[40px] w-full max-w-[262px] overflow-hidden rounded-[4px] bg-[#db1f40] text-[12px] text-white transition-colors hover:bg-[#c90020]"
          >
            <span className="flex w-[40px] items-center justify-center bg-[#c61a38]">
              <svg
                viewBox="0 0 24 24"
                className="h-[14px] w-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <path d="M10 17l5-5-5-5" />
                <path d="M15 12H3" />
              </svg>
            </span>
            <span className="flex flex-1 items-center justify-center pr-[40px] font-medium">
              Sign Up
            </span>
          </Link>

          {/* ================= GOOGLE ================= */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="mx-auto mt-3 flex h-[38px] w-full max-w-[263px] items-center rounded-[4px] border border-[#ddd] bg-white px-3 text-[13px] font-medium text-[#333] transition-colors hover:bg-[#f7f7f7]"
          >
            <svg viewBox="0 0 48 48" className="h-[18px] w-[18px] shrink-0">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            <span className="flex-1 pr-[18px] text-center">
              Continue with Google
            </span>
          </button>

          {/* ================= TERMS ================= */}
          <p className="mt-[6px] text-center text-[12px] leading-[20px] text-[#555]">
            By continuing, you agree to AMCOL Hardware&apos;s{" "}
            <Link
              to="/terms"
              className="text-[#e0203a] transition-colors hover:text-[#c90020]"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-[#e0203a] transition-colors hover:text-[#c90020]"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;