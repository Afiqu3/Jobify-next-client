import About from '@/components/About/About';
import Banner from '@/components/Banner/Banner';
import FAQ from '@/components/FAQ/FAQ';
import Footer from '@/components/Footer/Footer';
import HowItsWork from '@/components/HowItsWork/HowItsWork';
import LatestJobs from '@/components/LatestJobs/LatestJobs';
import Navbar from '@/components/Navbar/Navbar';
import TopCategories from '@/components/TopCategories/TopCategories';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Banner></Banner>
      <TopCategories></TopCategories>
      <HowItsWork></HowItsWork>
      <LatestJobs></LatestJobs>
      <About></About>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}
