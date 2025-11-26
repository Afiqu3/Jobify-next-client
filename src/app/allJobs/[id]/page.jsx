import JobDetails from '@/components/AllJobs/JobDetails';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default async function Page({ params }) {
  // Await params in Next.js 15
  const { id } = await params;

  try {
    const res = await fetch(
      `https://jobify-next-api-server.vercel.app/jobs/${id}`,
      {
        cache: 'no-store',
      }
    );

    // Check if response is ok
    if (!res.ok) {
      throw new Error(`Failed to fetch job: ${res.status}`);
    }

    const job = await res.json();

    return (
      <div className="overflow-hidden">
        <Navbar />
        <JobDetails job={job} />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error fetching job:', error);
    return (
      <div className="overflow-hidden">
        <Navbar />
        <div className="my-40 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-red-600">Error Loading Job</h1>
          <p className="text-gray-600 mt-4">{error.message}</p>
        </div>
        <Footer />
      </div>
    );
  }
}
