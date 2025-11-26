'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { PacmanLoader } from 'react-spinners';
import { ImCross } from 'react-icons/im';
import MyJobCard from './MyJobCard';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import axios from 'axios';

const MyAddedJobs = () => {
  const jobModalRef = useRef(null);
  const { data: session, status } = useSession();
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState({});
  const [refetch, setRefetch] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = session?.user;

  useEffect(() => {
    if (!user?.email) return;

    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(
          `https://jobify-next-api-server.vercel.app/myJobs?email=${user.email}`
        );
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [user?.email, refetch]);

  const handleModal = (job) => {
    setJob(job);
    jobModalRef.current.showModal();
  };

  const handleJobSubmit = async (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const summary = e.target.summary.value;
    const vacancy = e.target.vacancy.value;
    const salary = e.target.salary.value;

    const updatedJob = {
      title: title,
      category: category,
      summary: summary,
      coverImage: photo,
      salary: salary,
      vacancy: vacancy,
    };

    const res = await axios.patch(
      `https://jobify-next-api-server.vercel.app/jobs/${job._id}`,
      updatedJob
    );

    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Job Information Updated Successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      setRefetch(!refetch);
      jobModalRef.current.close();
    }

    // axiosSecure.patch(`/jobs/${job._id}`, updatedJob).then((data) => {

    // });
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This job will be permanently deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      try {
        const res = await axios.delete(
          `https://jobify-next-api-server.vercel.app/jobs/${id}`
        );
        if (res.data.deletedCount > 0) {
          setJobs((prev) => prev.filter((job) => job._id !== id));
          Swal.fire('Deleted!', 'Your job has been deleted.', 'success');
        }
      } catch (err) {
        Swal.fire('Error', 'Failed to delete the job.', 'error');
      }
    }
  };

  if (status === 'loading') {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <section className="my-40">
      <title>My Added Jobs</title>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col justify-center items-center mb-15"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-[#244034] mb-2`}>
            My Added Jobs
          </h2>

          <div className="h-0.5 bg-[#D2F34C] w-30"></div>
        </motion.div>

        {/* loading true */}
        {loading && (
          <div className="flex justify-center items-center py-20 bg-black">
            <PacmanLoader color="#00FFFF" size={50}></PacmanLoader>
          </div>
        )}

        {jobs.length === 0 && !loading && (
          <div className="flex justify-center items-center p-20 bg-gray-400">
            <h1 className="text-2xl text-[#244034]">No Job Added Yet</h1>
          </div>
        )}

        {jobs.length > 0 && (
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
                <MyJobCard
                  job={job}
                  handleDelete={handleDelete}
                  handleModal={handleModal}
                ></MyJobCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* Update modal */}
        <dialog
          ref={jobModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box bg-[#244034]">
            <h3 className="font-bold text-xl text-[#D2F34C]">
              Update Your Job
            </h3>
            <p className="py-4 text-white">
              Edit job details quickly and accurately
            </p>
            <form onSubmit={handleJobSubmit}>
              <fieldset className="fieldset">
                <label className="label text-white/50">Name</label>
                <input
                  type="text"
                  name="name"
                  className={`input focus:border-transparent text-black w-full`}
                  readOnly
                  defaultValue={user?.name}
                />
                {/* email */}
                <label className="label text-white/50">Email</label>
                <input
                  type="email"
                  className={`input focus:border-transparent text-black w-full`}
                  name="email"
                  readOnly
                  defaultValue={user?.email}
                />
                {/* Title */}
                <label className="label text-white/50">Title</label>
                <input
                  type="text"
                  name="title"
                  className={`input focus:border-transparent text-black w-full`}
                  defaultValue={job.title}
                />
                {/* category */}
                <label className="label text-white/50">Category</label>
                {/* {console.log(job.category === "Digital Marketing")} */}
                <select
                  name="category"
                  value={job?.category || ''}
                  onChange={(e) =>
                    setJob((prev) => ({ ...prev, category: e.target.value }))
                  }
                  className={`select focus:border-transparent text-black w-full`}
                >
                  <option value="" disabled>
                    Select a Category
                  </option>
                  <option value={'Web Development'}>Web Development</option>
                  <option value={'Digital Marketing'}>Digital Marketing</option>
                  <option value={'Graphics Designing'}>
                    Graphics Designing
                  </option>
                  <option value={'Technical Support'}>Technical Support</option>
                </select>
                {/* summary */}
                <label className="label text-white/50">Summary</label>
                <textarea
                  name="summary"
                  className={`textarea w-full focus:border-transparent text-black`}
                  placeholder="Give a summary"
                  defaultValue={job.summary}
                ></textarea>
                {/* cover image */}
                <label className="label text-white/50">Cover Image</label>
                <input
                  type="url"
                  name="photo"
                  className={`input focus:border-transparent text-black w-full`}
                  placeholder="Photo URL"
                  defaultValue={job.coverImage}
                />
                {/* salary */}
                <label className="label text-white/50">Salary</label>
                <input
                  type="text"
                  name="salary"
                  className={`input focus:border-transparent text-black w-full`}
                  placeholder="salary"
                  defaultValue={job.salary}
                />
                {/* vacancy */}
                <label className="label text-white/50">Vacancy</label>
                <input
                  type="text"
                  name="vacancy"
                  className={`input focus:border-transparent text-black w-full`}
                  placeholder="vacancy"
                  defaultValue={job.vacancy}
                />
                <button className="my-btn text-black mt-4 text-base">
                  Update Job
                </button>
              </fieldset>
            </form>

            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <ImCross />
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </section>
  );
};

export default MyAddedJobs;
