'use client';
import React from 'react';
import { format, parseISO } from 'date-fns';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const JobDetails = ({ job }) => {

  if (!job) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const formattedDate = format(parseISO(job.postedDate), 'dd-MM-yyyy');

  return (
    <section className="my-40 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#f9f9f9] rounded-2xl shadow-md overflow-hidden"
      >
        <div className="relative">
          <Image
            src={job.coverImage}
            alt={job.title}
            width={1200}
            height={400}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black/60 to-transparent"></div>
          <h1 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            {job.title}
          </h1>
        </div>

        <div className="p-6 md:p-8 text-[#244034]">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-gray-200 pb-4">
            <div>
              <p className="text-sm text-gray-500">Posted By</p>
              <h3 className="font-semibold">{job.postedBy}</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">Posted On</p>
              <h3 className="font-semibold">{formattedDate}</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">Category</p>
              <h3 className="font-semibold">{job.category}</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#D2F34C]/10 p-4 rounded-xl border-l-4 border-[#D2F34C]">
              <p className="text-sm text-gray-500">Salary Range</p>
              <h3 className="text-lg font-semibold">{job.salary}</h3>
            </div>
            <div className="bg-[#D2F34C]/10 p-4 rounded-xl border-l-4 border-[#D2F34C]">
              <p className="text-sm text-gray-500">Vacancies</p>
              <h3 className="text-lg font-semibold">{job.vacancy}</h3>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">Job Summary</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {job.summary}
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/allJobs">
              <button className="my-btn text-lg rounded-lg">Back</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default JobDetails;
