'use client';
import React, { useEffect, useState } from 'react';
import Links from './Links';
import { IoIosMenu } from 'react-icons/io';
import { TbXboxXFilled } from 'react-icons/tb';
import { FiLogOut } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { motion } from 'motion/react';
import logoImg from '../../assets/logo.png';
import { Bounce, toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { FaUserCircle } from 'react-icons/fa';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const navigationData = [
  {
    name: 'Home',
    path: '/',
    id: 1,
  },
  {
    name: 'About',
    path: '/about',
    id: 2,
  },
  {
    name: 'FAQ',
    path: '/faq',
    id: 3,
  },
  {
    name: 'All Jobs',
    path: '/allJobs',
    id: 4,
  },
  // {
  //   name: "Register",
  //   path: "/register",
  //   id: 3,
  // },
  // {
  //   name: "Login",
  //   path: "/login",
  //   id: 4,
  // },
];

const privateNavigationData = [
  // {
  //   name: 'Add a Job',
  //   path: '/addJob',
  //   id: 5,
  // },
  // {
  //   name: 'My Added Jobs',
  //   path: '/myAddedJobs',
  //   id: 6,
  // },
  // {
  //   name: 'My Accepted Jobs',
  //   path: '/myAcceptedJobs',
  //   id: 7,
  // },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session, status } = useSession();
  //   const { user, signOutUser } = useAuth();
  // const navigate = useNavigate();

  const links = navigationData.map((nav) => (
    <Links key={nav.id} nav={nav}></Links>
  ));
  const privateLinks = privateNavigationData.map((nav) => (
    <Links key={nav.id} nav={nav}></Links>
  ));

  // Scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (status === 'loading') {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const user = session?.user;

  // logout
  const handleLogOut = () => {
    // signOutUser()
    //   .then(() => {
    //     toast.success('Logout Successfully!', {
    //       position: 'top-center',
    //       autoClose: 3000,
    //       hideProgressBar: false,
    //       closeOnClick: false,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: 'dark',
    //       transition: Bounce,
    //     });
    //   })
    //   .catch(() => {
    //     // console.log(error);
    //   });
  };

  return (
    <section>
      <div
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${
          scrolled
            ? 'bg-[#244034]/95 shadow-lg backdrop-blur translate-y-2 lg:rounded-full'
            : 'bg-[#244034] translate-y-0 scale-100'
        }`}
      >
        {/* <p className="text-5xl">
          Welcome, {session.user?.name || session.user?.email}!
        </p>
        <p className="text-5xl">Welcome, {session.user?.email}!</p> */}
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
        <nav
          className={`flex justify-between items-center pt-7 max-w-6xl lg:mx-auto mx-4 md:py-5 ${
            !isOpen ? 'pb-7' : ''
          }`}
        >
          <motion.div
            className="flex items-center gap-x-3"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {isOpen ? (
              <TbXboxXFilled
                className="text-4xl text-white lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              ></TbXboxXFilled>
            ) : (
              <IoIosMenu
                className="text-4xl text-white lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              ></IoIosMenu>
            )}
            <h3
              className="text-xl font-extrabold"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Link href="/" className="flex items-center gap-x-1 text-white">
                <Image className="w-12 h-12" src={logoImg} alt="" />
                Jobify
              </Link>
            </h3>
          </motion.div>

          <div className="lg:flex gap-x-4 items-center hidden">
            <ul className="lg:flex hidden gap-x-8 font-medium">
              {links} {user && privateLinks}
            </ul>
          </div>

          <div className="lg:flex gap-x-4 items-center hidden">
            {/* <ul className="lg:flex hidden gap-x-8 font-medium">{links}</ul> */}
            {!user && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div className="flex items-center gap-x-2">
                  <Link
                    href="/login"
                    target="_parent"
                    className="hidden group lg:flex items-center gap-2 my-btn rounded-full text-black"
                  >
                    <FaUser />
                    <span>Login</span>
                  </Link>
                  <Link
                    href="/register"
                    target="_parent"
                    className="hidden group lg:flex items-center gap-2 my-btn rounded-full text-black"
                  >
                    <FaUserPlus />
                    <span>Register</span>
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Big screen and user is true */}
            {user && (
              <div className="">
                <motion.div
                  className="dropdown dropdown-hover dropdown-center"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    className="cursor-pointer m-1"
                  >
                    <FaUserCircle size={26} />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-[#244034] text-white rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li className="pointer-events-none cursor-not-allowed text-gray-400">
                      <p className="font-extrabold">{user?.name}</p>
                    </li>
                    <li className="hover:bg-[#D2F34C] hover:text-black">
                      <Link href={'/addJob'}>Add a Job</Link>
                    </li>
                    <li className="hover:bg-[#D2F34C] hover:text-black">
                      <Link href={'/myJob'}>Manage Job</Link>
                    </li>
                    <li className="hover:bg-[#D2F34C] hover:text-black">
                      <button
                        onClick={() => signOut({ callbackUrl: '/login' })}
                      >
                        <FiLogOut></FiLogOut>Logout
                      </button>
                    </li>
                  </ul>
                </motion.div>
              </div>
            )}
          </div>

          {/* small or medium screen and user is true */}
          {user && (
            <div className="lg:hidden block">
              <motion.div
                className="dropdown dropdown-bottom dropdown-end"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <div tabIndex={0} role="button" className="cursor-pointer m-1">
                  <FaUserCircle size={26} />
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <p className="font-extrabold">{user.name}</p>
                  </li>
                  <li className="hover:bg-[#D2F34C] hover:text-black">
                    <Link href={'/addJob'}>Add a Job</Link>
                  </li>
                  <li className="hover:bg-[#D2F34C] hover:text-black">
                    <Link href={'/myJob'}>Manage Job</Link>
                  </li>
                  <li>
                    <button onClick={() => signOut({ callbackUrl: '/login' })}>
                      <FiLogOut></FiLogOut>Logout
                    </button>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}

          {/* {user && (
          <div className="flex gap-6 items-center">
            <div className="lg:block hidden">
              <ul className="lg:flex hidden gap-x-8 font-medium">
                {privateLinks}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div
                onClick={() => navigate("/profile")}
                className="cursor-pointer"
              >
                <img className="w-12 rounded-full" src={user.photoURL} alt="" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <button
                onClick={handleLogOut}
                className="hidden group lg:flex items-center gap-2 bg-linear-to-r from-[#52057B] to-[#892CDC] text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform focus:ring-2 focus:ring-[#892CDC] focus:outline-none cursor-pointer"
              >
                <FiLogOut className="text-white text-lg transition-transform duration-300 group-hover:-translate-x-1" />
                <span>Logout</span>
              </button>
            </motion.div>
          </div>
        )} */}
        </nav>

        {/*  mobile and tab */}
        {isOpen && !user && (
          <div className="lg:hidden mt-2 mb-5 ml-10 space-y-3 max-w-45 relative h-45">
            <ul className={`space-y-3 animation`}>{links}</ul>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="space-y-3">
                <Link
                  href="/login"
                  target="_parent"
                  className="lg:hidden animation flex items-center justify-center gap-2 my-btn rounded-full text-black"
                >
                  <FaUser />
                  <span>Login</span>
                </Link>
                <Link
                  href="/register"
                  target="_parent"
                  className="lg:hidden animation flex items-center gap-2 justify-center my-btn rounded-full text-black"
                >
                  <FaUserPlus />
                  <span>Register</span>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
        {isOpen && user && (
          <div className="lg:hidden mt-2 mb-5 ml-10 space-y-3 max-w-45 relative h-55">
            <ul className={`space-y-3 animation`}>
              {links} {privateLinks}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
