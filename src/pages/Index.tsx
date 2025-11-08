import Header from "@/layout/Header";
import HeroSection from "@/layout/HeroSection";
import LeftSidebar from "@/layout/LeftSidebar";
import { Footer } from "@/layout/Footer";
import { useSidebar } from "@/contexts/SidebarContext";
import { NavProvider } from "@/contexts/NavContext";

const Index = () => {
  const { isLeftSidebarVisible } = useSidebar();

  return (
    <NavProvider>
      <div className="min-h-screen bg-background relative">
        <Header />
        <LeftSidebar />
        <main
          className={`transition-all duration-300 pt-[109px] ${
            isLeftSidebarVisible ? "sm:ml-[300px] lg:ml-[350px]" : "sm:ml-0"
          }`}
        >
          <HeroSection />
        </main>
        <Footer />
      </div>
    </NavProvider>
  );
};

export default Index;
