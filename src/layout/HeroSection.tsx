import { useNav } from "@/contexts/NavContext";
import Jackpot from "@/features/jackpot/Jakpot/Jakpot";
import { CoinflipGameList } from "@/features/coinflip/CoinFlip/coinflipgamelist";
import { AffiliatesDashboard } from "@/features/affiliates/Affiliates/affiliatesdashboard";
import { TermsOfService } from "@/features/provably-fair/termsofservice";
import { ProvablyFair } from "@/features/provably-fair/Provablyfair/dailydetails";


const HeroSection = () => {
  const { activeLink } = useNav();

  return (
    <section
      className="pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-16 relative"
      style={{
        backgroundImage: "url('/assets/bg.3338e82d.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Switcher */}
      {activeLink === "/" && <Jackpot />}
      {activeLink === "/coinflip" && (
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <CoinflipGameList />
        </div>
      )}
      {activeLink === "/affiliates" && (
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <AffiliatesDashboard />
        </div>
      )}
      {activeLink === "/terms" && (
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <TermsOfService />
        </div>
      )}
      {activeLink === "/fairness" && <ProvablyFair />}
    </section>
  );
};

export default HeroSection;

