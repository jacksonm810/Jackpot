import { FooterContext } from "./footercontext";
import { useSidebar } from "@/contexts/SidebarContext";

export const Footer = () => {
  const { isLeftSidebarVisible } = useSidebar();
  
  return (
    <div className="relative bg-[linear-gradient(to_right_bottom,rgb(20,20,20),rgb(13,13,13))] box-border caret-transparent w-full">
      <div className="[mask-image:linear-gradient(to_top,rgb(0,0,0),rgba(0,0,0,0)_90%)] absolute bg-black box-border caret-transparent h-[300px] mix-blend-screen pointer-events-none w-full z-[-1] mx-auto bottom-full inset-x-0"></div>
      <div className="transition-all duration-300">
        <div
          className={
            isLeftSidebarVisible 
              ? 'sm:-translate-x-[0px] lg:-translate-x-[-165px]'
              : 'lg:translate-x-[10px]'
          }
          style={{ transition: 'transform 300ms' }}
        >
          <FooterContext />
        </div>
      </div>
    </div>
  );
};
