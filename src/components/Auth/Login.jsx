'use client';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FiLogIn } from 'react-icons/fi';
import { Bounce, toast } from 'react-toastify';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid credentials");
    } else {
      toast.success('Login Successfully!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
      router.push("/"); // Redirect to dashboard after login
    }
  };

  const handleGoogleLogIn = () => {
    signIn("google", { callbackUrl: "/" })
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  return (
    <motion.div
      className="card bg-[#244034] text-white w-full max-w-md shrink-0 shadow-2xl mx-auto my-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <title>Login</title>

      <div className="card-body">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-[#D2F34C] mb-2">
            Welcome Back to Jobify
          </h1>
          <p className="text-gray-400 text-sm">
            Log in to post tasks, claim opportunities, and get things done
            instantly
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <fieldset className="fieldset space-y-3">
            {/* email */}
            <input
              type="email"
              name="email"
              className={`input focus:border-transparent text-black w-full`}
              placeholder="Email"
              required
            />
            {/* password */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className={`input focus:border-transparent text-black w-full`}
                placeholder="Password"
                required
              />
              <span
                onClick={handleTogglePassword}
                className="absolute top-3 right-2 z-1 cursor-pointer text-black"
              >
                {showPassword ? (
                  <FaEyeSlash size={18}></FaEyeSlash>
                ) : (
                  <FaEye size={18}></FaEye>
                )}
              </span>
            </div>
            <div
            // onClick={handlePasswordReset}
            >
              <button className="link link-hover">Forgot password?</button>
            </div>
            <button className="my-btn text-black flex justify-center items-center gap-2 text-base">
              {' '}
              <FiLogIn />
              Login
            </button>
          </fieldset>
        </form>

        <div className="flex justify-between items-center text-white gap-2">
          <div className="border w-1/2 border-gray-400"></div>
          <p>or</p>
          <div className="border w-1/2 border-gray-400"></div>
        </div>
        <button onClick={handleGoogleLogIn} className="btn btn-neutral bg-gray-800/50 hover:bg-gray-800 border text-white font-medium transition-all duration-300">
          {' '}
          <FcGoogle size={24} />
          Login With Google
        </button>

        <p className="text-center">
          Do not have account? Please{' '}
          <Link
            className="text-blue-500 hover:text-blue-900"
            href={'/register'}
            target="_parent"
          >
            Register
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
