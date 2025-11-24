'use client';
import React from "react";
import { motion } from "motion/react";

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      initial={{ y: 0, borderLeftWidth: 0 }}
      whileHover={{
        y: -5,
        borderLeftWidth: 3,
        borderLeftColor: "#D2F34C",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="flex flex-col items-center justify-center gap-3 bg-[#f9f9f9] py-8 rounded-xl shadow-md cursor-pointer border-l-0 border-l-transparent"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-4xl text-[#244034]"
      >
        {category.icon}
      </motion.div>

      <h3 className="text-lg font-semibold text-[#244034]">{category.name}</h3>
    </motion.div>
  );
};

export default CategoryCard;