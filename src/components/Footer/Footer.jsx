'use client';
import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import logoImg from "../../assets/logo.png";
import { motion } from "motion/react";
import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    {
      Icon: FaFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/afique.hossain.J/",
    },
    { Icon: FaGithub, label: "GitHub", href: "https://github.com/Afiqu3" },
    {
      Icon: SiX,
      label: "X",
      href: "https://x.com/",
    },
    {
      Icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/md-afique-hossain",
    },
  ];

  const explore = [
    ["All Jobs", "/allJobs"],
    ["Add Job", "/addJob"],
    ["My Added Jobs", "/myAddedJobs"],
    ["Applied Jobs", "/myAcceptedJobs"],
  ];

  const company = [
    ["Home", "/"],
    ["About", "/about"],
    ["Register", "/register"],
    ["Login", "/login"],
  ];

  const resources = [
    ["Blog", "/blog"],
    ["Community", "/community"],
    ["Help Center", "/support"],
    ["Privacy Policy", "/privacy"],
  ];

  return (
    <footer
      className="relative bg-[#244034] text-gray-300 pt-15 border-t border-white/10 sm:[clip-path:polygon(0_0%,100%_25%,100%_100%,0_100%)] [clip-path:polygon(0_0%,100%_15%,100%_100%,0_100%)]"
    >
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Section */}
          <motion.div
            className="col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Image className="h-10 w-10" src={logoImg} alt="logo" />
              <div>
                <h3 className="text-white text-lg font-semibold">Jobify</h3>
                <p className="text-xs text-gray-400">
                  Empowering your next career move
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-300/90 leading-6">
              Jobify helps you explore, post, and manage jobs effortlessly.
              Connect with skilled professionals or find your next opportunity
              in just a few clicks.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <Link
                  href={href}
                  key={label}
                  target="_parent"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-2 rounded-lg ring-1 ring-white/10 hover:ring-[#D2F34C]/60 hover:-translate-y-0.5 transition bg-white/5 cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-gray-300 group-hover:text-[#D2F34C]" />
                </Link>
              ))}
            </div>

            <div className="mt-6 text-sm text-gray-400 flex items-start gap-2">
              <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-gray-400" />
              <p>Global • Remote-first</p>
            </div>
          </motion.div>

          {/* Explore Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              {explore.map(([label, link]) => (
                <li key={label}>
                  <Link
                    href={link}
                    target="_parent"
                    className="hover:text-[#D2F34C] transition cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              {company.map(([label, link]) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="hover:text-[#D2F34C] transition cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              {resources.map(([label, link]) => (
                <li key={label}>
                  <Link
                    href={link}
                    className="hover:text-[#D2F34C] transition cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 border border-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#D2F34C] font-semibold">Jobify</span> — All
            rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-[#D2F34C] transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#D2F34C] transition">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-[#D2F34C] transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;