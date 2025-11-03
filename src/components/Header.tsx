import { Button } from "@/components/ui/button";
import { Twitter, MessageCircle } from "lucide-react";
import { Navigation } from "@/components/ui/Navigation";
import { useState } from "react";
import { Logo } from "./ui/Logo";
import { Navbar } from "./ui/Navbar";

const Header = () => {
  const [activeLink, setActiveLink] = useState('/')

  return (
    <header className="flex fixed top-0 left-0 right-0 z-50">
      <div className="flex w-[100px] sm:w-[300px] lg:w-[350px]">
        <Logo />
      </div>
      <div className="flex flex-col flex-1">
        <Navbar />
        <Navigation
          activeLink={activeLink}
          onLinkClick={(href) => {
            console.log('Navigating to:', href)
            setActiveLink(href)
          }}
          onConnectClick={() => console.log('Connect clicked')}
        />
      </div>
    </header>
  );
};

export default Header;
