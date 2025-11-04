import { FooterDescription } from "./footerdesciption";
import { FooterLicense } from "./footerlicense.tsx";
import { FooterLinks } from "./footerlinks.tsx";
import { FooterCopyright } from "./footercopyright.tsx";

export const FooterContext = () => {
  return (
    <div className="box-border caret-transparent flex flex-col pt-9 pb-[100px] px-6 md:pb-9 md:px-16">
      <FooterDescription />
      <FooterLicense />
      <FooterLinks />
      <FooterCopyright />
    </div>
  );
};
