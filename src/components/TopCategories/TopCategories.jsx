'use client';
import React from 'react';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaUserTie,
  FaWrench,
  FaHeartbeat,
  FaSchool,
  FaStore,
} from 'react-icons/fa';
import { motion } from 'motion/react';
import CategoryCard from './CategoryCard';

const categories = [
  { id: 1, name: 'Web Development', icon: <FaLaptopCode /> },
  { id: 2, name: 'Graphics Designing', icon: <FaPaintBrush /> },
  { id: 3, name: 'Digital Marketing', icon: <FaChartLine /> },
  { id: 4, name: 'Management', icon: <FaUserTie /> },
  { id: 5, name: 'Technical Support', icon: <FaWrench /> },
  { id: 6, name: 'Healthcare', icon: <FaHeartbeat /> },
  { id: 7, name: 'Education', icon: <FaSchool /> },
  { id: 8, name: 'Sales', icon: <FaStore /> },
];

const TopCategories = () => {
  return (
    <section className="my-30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          className="flex flex-col justify-center items-center mb-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold text-[#244034] mb-2`}
          >
            Top Categories
          </h2>

          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category}></CategoryCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopCategories;
