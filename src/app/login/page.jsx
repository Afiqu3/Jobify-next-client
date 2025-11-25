import Login from '@/components/Auth/Login';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

export default function page() {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}
