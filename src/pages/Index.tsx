import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Sidebar from "@/components/Sidebar";
import LeftSidebar from "@/components/LeftSidebar";
import BackgroundGrid from "@/components/BackgroundGrid";
import RecentWinners from "@/components/RecentWinners";
import { Footer } from "@/components/ui/Footer";
import { useSidebar } from "@/contexts/SidebarContext";

const Index = () => {
  const { isLeftSidebarVisible } = useSidebar();
  
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundGrid />
      <Header />
      <LeftSidebar />
      <main 
        className={`transition-all duration-300 pt-[109px] lg:mr-80 ${
          isLeftSidebarVisible ? 'sm:ml-[300px] lg:ml-[350px]' : 'sm:ml-0'
        }`}
      >
        <HeroSection />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
