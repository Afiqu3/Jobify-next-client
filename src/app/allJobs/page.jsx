import AllJobs from '@/components/AllJobs/AllJobs';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

export default function page() {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <AllJobs></AllJobs>
      <Footer></Footer>
    </div>
  );
}
