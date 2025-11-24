'use client';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

const JobCard = ({ job }) => {
  const dateInBD = parseISO(job.postedDate);

  const formattedDate = format(dateInBD, 'dd-MM-yyyy');
  return (
    <div className="bg-[rgb(249,249,249)] pb-6 shadow-sm hover:drop-shadow-md hover:-translate-y-0.5">
      <figure className="p-10 relative w-full h-55">
        <Image
          src={job.coverImage}
          className="object-cover rounded-lg"
          fill
          alt={job.title}
        />
      </figure>
      <div className="mt-4 px-4">
        <p className="text-gray-400 text-sm mb-2">{job.category}</p>
        <h3 className="text-[#244034] text-xl font-semibold mb-4">
          {job.title}
        </h3>
        <div className="h-px bg-gray-200 mb-4"></div>
        <div className="space-y-1 text-[#244034] mb-6">
          <div className="flex justify-between items-center">
            <p>{job.postedBy}</p>
            <p>{formattedDate}</p>
          </div>
          <p>
            Salary: <span className="font-semibold">{job.salary}</span>
          </p>
        </div>

        <Link
          href={`/allJobs/${job._id}`}
          className="my-btn w-3/5 flex gap-4 items-center group transition px-4 text-black justify-center"
        >
          <span>View Details</span>{' '}
          <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300"></FaArrowRight>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
