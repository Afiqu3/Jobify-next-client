'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import JobCard from '../LatestJobs/JobCard';
import { PacmanLoader } from 'react-spinners';
import axios from 'axios';

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [sortType, setSortType] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://jobify-next-api-server.vercel.app/jobs?sort=${sortType}`
        );
        setJobs(res.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [sortType]);

  return (
    <section className="my-40">
      <title>All Jobs</title>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col justify-center items-center mb-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-[#244034] mb-2`}>
            All Jobs
          </h2>

          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>

        <motion.div
          className="mb-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form className="flex justify-center items-center gap-2">
            <select
              name="sortType"
              id=""
              onChange={(e) => setSortType(e.target.value)}
              className={`select focus:border-transparent text-black`}
            >
              <option value="asc">Old to New</option>
              <option value="desc">New to Old</option>
            </select>
          </form>
        </motion.div>

        {/* loading true */}
        {loading && (
          <div className="flex justify-center items-center">
            <PacmanLoader size={50}></PacmanLoader>
          </div>
        )}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job._id}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              <JobCard job={job}></JobCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
