'use client';
import React from 'react';

const StepCard = ({ step }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 gap-x-6">
      <div className="bg-[#D2F34C] p-8 rounded-full">
        <span className="text-black text-4xl">{step.icon}</span>
      </div>
      <h3 className="text-xl font-semibold">{step.name}</h3>
      <p className="text-center text-gray-400">{step.paragraph}</p>
    </div>
  );
};

export default StepCard;
