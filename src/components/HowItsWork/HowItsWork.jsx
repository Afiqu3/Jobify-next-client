'use client';
import React from 'react';
import { motion } from 'motion/react';
import { FaUserPlus } from 'react-icons/fa6';
import { RiProfileFill } from 'react-icons/ri';
import { FaPen } from 'react-icons/fa';
import StepCard from './StepCard';
import arrowImg from '../../assets/arrow.png';
import Image from 'next/image';
import useScreenSize from '@/hooks/useScreenSize';

const steps = [
  {
    id: 1,
    name: 'Create Account',
    paragraph: "It's very easy to open an account and start your journey.",
    icon: <FaUserPlus />,
  },
  {
    id: 2,
    name: 'Complete your profile',
    paragraph:
      'Complete your profile with all the info to get attention of client.',
    icon: <RiProfileFill />,
  },
  {
    id: 3,
    name: 'Complete your profile',
    paragraph:
      'Apply & get your preferable jobs with all the requirements and get it.',
    icon: <FaPen />,
  },
];

const HowItsWork = () => {
  const { isMedium, isLarge } = useScreenSize();

  const initialX = isLarge ? -1100 : isMedium ? -200 : 0;

  return (
    <motion.section
      className="bg-[#244034]"
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="py-30 relative">
        <div className="max-w-6xl mx-auto text-white">
          <motion.div
            className="flex flex-col justify-center items-center mb-15"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-2`}>
              How It&apos;s Work?
            </h2>
            <div className="h-0.5 bg-[#D2F34C] w-30"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 m-4">
            {steps.map((step) => (
              <StepCard key={step.id} step={step}></StepCard>
            ))}
          </div>
        </div>

        <Image
          className="hidden lg:block absolute top-50 left-[380px]"
          src={arrowImg}
          alt=""
        />
        <Image
          className="hidden lg:block absolute top-50 left-[780px]"
          src={arrowImg}
          alt=""
        />
      </div>
    </motion.section>
  );
};

export default HowItsWork;
