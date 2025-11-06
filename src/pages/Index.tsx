import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LeftSidebar from "@/components/LeftSidebar";
import { Footer } from "@/components/ui/Footer";
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
