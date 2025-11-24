'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import { useRouter } from "next/navigation";

const slides = [banner1.src, banner2.src, banner3.src];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-10 overflow-hidden text-white">
      <div className="max-w-6xl lg:mx-auto mx-4 lg:my-40 my-20">
        <AnimatePresence>
          <motion.img
            key={current}
            src={slides[current]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            A Reliable Marketplace for{" "}
            <span className="text-[#D2F34C]">
              <Typewriter
                words={[
                  "Freelancers",
                  "Contractors",
                  "Small Businesses",
                  "Teams",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-lg max-w-2xl mb-8"
          >
            Jobify helps you post, discover, and manage jobs with confidence.
            Authenticated users control their job listings — add, update, or
            remove — while other users can browse and agree to take tasks
            securely.
          </motion.p>

          <motion.button
            onClick={() => router.push("/addJob")}
            whileTap={{ scale: 0.95 }}
            className="text-black my-btn rounded-full"
          >
            Create a Job
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Banner;