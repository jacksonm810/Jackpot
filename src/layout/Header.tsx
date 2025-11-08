import { Button } from "@/shared/components/ui/button";
import { Twitter, MessageCircle } from "lucide-react";
import { Navigation } from "@/shared/components/Navigation";
import { useNav } from "@/contexts/NavContext";
import { Logo } from "@/shared/components/Logo";
import { Navbar } from "@/shared/components/Navbar";
import { WalletConnect } from "@/shared/components/WalletModal/walletconnect";
import { useState, useCallback, useEffect } from "react";

const Header = () => {
  const { activeLink, setActiveLink } = useNav();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const handleConnectClick = useCallback(() => {
    setIsWalletModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsWalletModalOpen(false);
  }, []);

  const handleWalletSelect = useCallback((walletName: string) => {
    console.log('Wallet selected:', walletName);
    // Here you would typically integrate with wallet connection logic
    setIsWalletModalOpen(false);
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isWalletModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isWalletModalOpen, handleCloseModal]);

  return (
    <>
      <header className="flex fixed top-0 left-0 right-0 z-50">
        <div className="flex w-[100px] sm:w-[300px] lg:w-[350px]">
          <Logo />
        </div>
        <div className="flex flex-col flex-1">
          <Navbar onLinkClick={(href) => {
            console.log('Navigating to:', href);
            setActiveLink(href);
          }} />
          <Navigation
            activeLink={activeLink}
            onLinkClick={(href) => {
              console.log('Navigating to:', href)
              setActiveLink(href)
            }}
            onConnectClick={handleConnectClick}
          />
        </div>
      </header>

      {/* Wallet Connection Modal */}
      {isWalletModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={handleCloseModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            <WalletConnect
              onWalletSelect={handleWalletSelect}
              logo="/img/logo.webp"
              title="Connect"
            />
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
