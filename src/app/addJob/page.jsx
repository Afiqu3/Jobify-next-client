'use client';
import AddJob from '@/components/AddJob/AddJob';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <AddJob></AddJob>
      <Footer></Footer>
    </div>
  );
}
