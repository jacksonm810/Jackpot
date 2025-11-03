import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Sidebar from "@/components/Sidebar";
import LeftSidebar from "@/components/LeftSidebar";
import BackgroundGrid from "@/components/BackgroundGrid";
import RecentWinners from "@/components/RecentWinners";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundGrid />
      <Header />
      <LeftSidebar />
      <main className="sm:ml-[300px] lg:ml-[350px] lg:mr-80 pt-[109px]">
        <HeroSection />
      </main>
      <Sidebar />
    </div>
  );
};

export default Index;
