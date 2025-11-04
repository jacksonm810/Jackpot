import { FooterContext } from "./footercontext";

export const Footer = () => {
  return (
    <div className="relative bg-[linear-gradient(to_right_bottom,rgb(20,20,20),rgb(13,13,13))] box-border caret-transparent w-full">
      <div className="[mask-image:linear-gradient(to_top,rgb(0,0,0),rgba(0,0,0,0)_90%)] absolute bg-black box-border caret-transparent h-[300px] mix-blend-screen pointer-events-none w-full z-[-1] mx-auto bottom-full inset-x-0"></div>
      <FooterContext />
    </div>
  );
};
