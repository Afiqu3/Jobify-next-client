'use client';
import React, { useState } from 'react';
import {
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Bounce, toast } from 'react-toastify';
import { motion } from 'motion/react';
import { FaUserPlus } from 'react-icons/fa6';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [length, setLength] = useState(false);
  const router = useRouter();

  const handlePassOnChange = (e) => {
    const pass = e.target.value;
    const checkUpper = /[A-Z]/;
    const checkLower = /[a-z]/;
    const checkLength = /^.{6,}$/;
    if (checkUpper.test(pass)) {
      setUpper(true);
    } else {
      setUpper(false);
    }
    if (checkLower.test(pass)) {
      setLower(true);
    } else {
      setLower(false);
    }
    if (checkLength.test(pass)) {
      setLength(true);
    } else {
      setLength(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    if (!upper) {
      setError('Password must have have an uppercase letter');
      return;
    } else if (!lower) {
      setError('Password must have have an lowercase letter');
      return;
    } else if (!length) {
      setError('Password length must be at least 6 character');
      return;
    }
    setError('');

    try {
      // Register user
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Registration failed');
        setLoading(false);
        return;
      }

      // Auto login after registration
      const signInResult = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });
      toast.success('Register Successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });

      if (signInResult?.error) {
        setError(
          'Registration successful, but login failed. Please login manually.'
        );
        setTimeout(() => router.push('/login'), 2000);
      } else {
        router.push('/');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    signIn('google', { callbackUrl: '/' });
    toast.success('Register Successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <motion.div
      className="card bg-[#244034] text-white w-full max-w-lg shrink-0 shadow-2xl mx-auto my-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <title>Register</title>
      <div className="card-body">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-[#D2F34C] mb-2">
            Join Jobify Today
          </h1>
          <p className="text-gray-400 text-sm">
            Create your free account and start posting or claiming tasks in
            seconds - no fees, no hassle
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* User name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className={`input focus:border-transparent text-black w-full`}
              placeholder="Name"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className={`input focus:border-transparent text-black w-full`}
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                onChange={handlePassOnChange}
                className={`input focus:border-transparent text-black w-full`}
                placeholder="Password"
                required
              />
              <span
                onClick={handleTogglePassword}
                className={`absolute top-3 right-6 z-1 cursor-pointer text-black`}
              >
                {showPassword ? (
                  <FaEyeSlash size={18}></FaEyeSlash>
                ) : (
                  <FaEye size={18}></FaEye>
                )}
              </span>
            </div>
            <div className="mt-3 space-y-1.5 text-sm">
              <div className="flex items-center gap-2">
                {upper ? (
                  <FaCheckCircle
                    className="text-green-500 shrink-0"
                    size={14}
                  />
                ) : (
                  <FaTimesCircle className="text-gray-600 shrink-0" size={14} />
                )}
                <span className={upper ? 'text-green-500' : 'text-gray-500'}>
                  At least one uppercase letter
                </span>
              </div>
              <div className="flex items-center gap-2">
                {lower ? (
                  <FaCheckCircle
                    className="text-green-500 shrink-0"
                    size={14}
                  />
                ) : (
                  <FaTimesCircle className="text-gray-600 shrink-0" size={14} />
                )}
                <span className={lower ? 'text-green-500' : 'text-gray-500'}>
                  At least one lowercase letter
                </span>
              </div>
              <div className="flex items-center gap-2">
                {length ? (
                  <FaCheckCircle
                    className="text-green-500 shrink-0"
                    size={14}
                  />
                ) : (
                  <FaTimesCircle className="text-gray-600 shrink-0" size={14} />
                )}
                <span className={length ? 'text-green-500' : 'text-gray-500'}>
                  Minimum 6 characters
                </span>
              </div>
            </div>
            <button className="mt-4 my-btn text-black flex justify-center items-center gap-2 text-base">
              <FaUserPlus />
              <span>Register</span>
            </button>
          </fieldset>
        </form>

        <div className="flex justify-between items-center text-white gap-2">
          <div className="border w-1/2 border-gray-400"></div>
          <p>or</p>
          <div className="border w-1/2 border-gray-400"></div>
        </div>

        <button
          onClick={handleGoogleSignUp}
          className="btn btn-neutral bg-gray-800/50 hover:bg-gray-800 text-white font-medium transition-all duration-300"
        >
          {' '}
          <FcGoogle size={24} />
          Sign Up With Google
        </button>

        <p className="text-center">
          Already Have an account? Please{' '}
          <Link
            className="text-blue-500 hover:text-blue-900"
            href={'/login'}
            target="_parent"
          >
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Register;
