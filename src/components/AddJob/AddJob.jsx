'use client';
import React from 'react';
import { MdAddChart } from 'react-icons/md';
import { motion } from 'motion/react';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import axios from 'axios';

const AddJob = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const user = session?.user;

  const handleAddJob = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const summary = e.target.summary.value;
    const vacancy = e.target.vacancy.value;
    const salary = e.target.salary.value;

    const newJob = {
      title: title,
      postedBy: name,
      category: category,
      summary: summary,
      coverImage: photo,
      userEmail: email,
      salary: salary,
      vacancy: vacancy,
      postedDate: new Date(),
    };

    axios
      .post('https://jobify-next-api-server.vercel.app/jobs', newJob)
      .then((data) => {
        //   console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'New Job Added.',
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };

  //   {
  //     id: 5,
  //     title: "Full-Stack WordPress Developer",
  //     postedBy: "Karim Ahmed",
  //     category: "Web Development",
  //     summary:
  //       "Develop custom themes, plugins, and optimize performance for high-traffic WordPress sites.",
  //     coverImage:
  //       "https://demoapus1.com/freeio/wp-content/uploads/2022/11/service9.jpg",
  //     userEmail: "karim@wpstudio.bd",
  //     salary: "BDT 70,000 - 100,000",
  //     vacancy: "2",
  //     postedDate: "2025-11-06T13:15:00+06:00",
  //   },

  return (
    <motion.div
      className="card bg-[#244034] text-white w-full max-w-lg shrink-0 shadow-2xl mx-auto my-40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <title>Add Job</title>
      <div className="card-body">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-[#D2F34C] mb-2">
            Post a New Job
          </h1>
          <p className="text-gray-400 text-sm">
            Quickly describe your task and set details to get it done
          </p>
        </div>

        <form onSubmit={handleAddJob}>
          <fieldset className="fieldset">
            {/* User name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className={`input focus:border-transparent text-black w-full`}
              placeholder="Name"
              value={user.name}
              readOnly
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className={`input focus:border-transparent text-black w-full`}
              placeholder="Email"
              value={user.email}
              required
              readOnly
            />
            {/* Title */}
            <label className="label">Title</label>
            <input
              type="text"
              name="title"
              className={`input focus:border-transparent text-black w-full`}
              placeholder="Title"
              required
            />
            {/* category */}
            <label className="label">Category</label>
            <select
              name="category"
              defaultValue=""
              className={`select focus:border-transparent text-black w-full`}
              required
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option value={'Web Development'}>Web Development</option>
              <option value={'Digital Marketing'}>Digital Marketing</option>
              <option value={'Graphics Designing'}>Graphics Designing</option>
              <option value={'Technical Support'}>Technical Support</option>
            </select>
            {/* summary */}
            <label className="label">Summary</label>
            <textarea
              name="summary"
              className={`textarea w-full focus:border-transparent text-black`}
              placeholder="Give a summary"
            ></textarea>
            {/* cover image */}
            <label className="label">Cover Image</label>
            <input
              type="url"
              name="photo"
              className={`input focus:border-transparent text-black w-full`}
              placeholder="Photo URL"
              required
            />
            {/* salary */}
            <label className="label">Salary</label>
            <input
              type="text"
              name="salary"
              className={`input focus:border-transparent text-black w-full`}
              placeholder="salary"
              required
            />
            {/* vacancy */}
            <label className="label">Vacancy</label>
            <input
              type="text"
              name="vacancy"
              className={`input focus:border-transparent text-black w-full`}
              placeholder="vacancy"
              required
            />
            <button className="mt-4 my-btn text-black flex justify-center items-center gap-2 text-base">
              <MdAddChart size={14} />
              <span>Post</span>
            </button>
          </fieldset>
        </form>
      </div>
    </motion.div>
  );
};

export default AddJob;
