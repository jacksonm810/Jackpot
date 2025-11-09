import { useCallback, useEffect, useState, useRef } from "react";
import { StatsGrid } from "../statsgrid";
import { JackpotBetting } from "../Jakpotbetting";
import { HistoryHeader } from "../historyheader";
import { HistoryFooter } from "../historyfooter";
import { UserCard } from "@/shared/components/usercard";
import { userCardInfo } from "@/shared/data/usercard_infor";
import { GameCard } from "../Herosection/gamecard";
import { gamecards } from "@/shared/data/gamecard_info";
import { UserStats } from "@/shared/components/UserStatsModal/userstats";
import type { UserStatsProps } from "@/shared/components/UserStatsModal/userstats";
import { WinnerCard } from "../winnercard";
import ThreeDCarouselWrapper, { ThreeDCarouselRef } from "@/shared/components/ui/ThreeDCarouselWrapper";

const Jackpot = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });
  const [jackpotValue] = useState(0.058);
  const [isUserStatsModalOpen, setIsUserStatsModalOpen] = useState(false);
  const [selectedUserStats, setSelectedUserStats] =
    useState<UserStatsProps | null>(null);
  const [is3DView, setIs3DView] = useState(false);
  const carouselRef = useRef<ThreeDCarouselRef>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  const [cards, setCards] = useState(() => gamecards.map(card => ({ ...card, isActive: false })));
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [showWinnerCard, setShowWinnerCard] = useState(true);
  const [winnerData, setWinnerData] = useState({
    roundNumber: "#177885",
    username: "baby_grl...",
    level: 55,
    avatarUrl:
      "https://solpot.com/avatars/9.x/thumbs/svg?seed=baby_grl&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80",
    prizeAmount: 0.168,
    winChance: 10.83,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleUserCardClick = (player: {
    username: string;
    level: number;
    avatarUrl: string;
  }) => {
    setSelectedUserStats({
      username: player.username,
      level: player.level,
      avatarUrl: player.avatarUrl,
      joinDate: "April 19, 2025",
      netProfit: 1.8406,
      netProfitChange: "negative",
      luckiestWin: 74.69,
      biggestWin: 8.607,
      totalWagered: 511.927,
      timeframe: "Last 7 Days",
    });
    setIsUserStatsModalOpen(true);
  };

  const handleGameCardClick = (player: { name: string; id: number; avatar: string }) => {
    const level = Math.floor(Math.random() * 50) + 1;
    setSelectedUserStats({
      username: player.name,
      level,
      avatarUrl: player.avatar,
      joinDate: "April 19, 2025",
      netProfit: 1.8406,
      netProfitChange: "negative",
      luckiestWin: 74.69,
      biggestWin: 8.607,
      totalWagered: 511.927,
      timeframe: "Last 7 Days",
    });
    setIsUserStatsModalOpen(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsUserStatsModalOpen(false);
    setSelectedUserStats(null);
  }, []);

  const showWinner = useCallback((winner: {
    roundNumber: string;
    username: string;
    level: number;
    avatarUrl: string;
    prizeAmount: number;
    winChance: number;
  }) => {
    setWinnerData(winner);
    setShowWinnerCard(true);
  }, []);

  useEffect(() => {
    if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      showWinner({
        roundNumber: "#177885",
        username: "SHWING",
        level: 68,
        avatarUrl:
          "https://solpot.com/avatars/9.x/thumbs/svg?seed=SHWING&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80",
        prizeAmount: 0.868,
        winChance: 21.55,
      });
    }
  }, [timeLeft, showWinner]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isUserStatsModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isUserStatsModalOpen, handleCloseModal]);

  // Update cards' isActive based on selected index
  useEffect(() => {
    setCards(prevCards => 
      prevCards.map((card, index) => ({
        ...card,
        isActive: index === selectedCardIndex
      }))
    );
  }, [selectedCardIndex]);

  // Handle rotation change in 3D mode to track selected card
  const handleRotationChange = useCallback((rotation: number) => {
    if (!is3DView) return;
    
    const totalCards = cards.length;
    if (totalCards === 0) return;
    
    const degreesPerCard = 360 / totalCards;
    // With rotateNegative, cards are positioned at: 0, -rotDeg, -2*rotDeg, etc.
    // When container rotates by 'rotation' (negative), each card's position becomes: rotation, -rotDeg + rotation, -2*rotDeg + rotation, etc.
    // We want to find which card is closest to 0 degrees (facing forward)
    // Card i's position after rotation: -i * degreesPerCard + rotation
    // We want to find i such that -i * degreesPerCard + rotation is closest to 0
    // Solving: i ≈ -rotation / degreesPerCard
    // Since rotation is negative, -rotation is positive, so we get the correct index
    const currentIndex = Math.round(rotation / degreesPerCard);
    // Ensure index is positive and within bounds
    const positiveIndex = ((currentIndex % totalCards) + totalCards) % totalCards;
    setSelectedCardIndex(positiveIndex);
  }, [is3DView, cards.length]);

  // Auto-rotate 3D carousel
  useEffect(() => {
    if (!is3DView || !carouselRef.current) return;

    const rotationSpeed = 0.1; // degrees per frame (reduced to 1/3 of original speed)
    let rotation = 0;
    let animationFrame: number;
    let lastSelectedIndex = -1;

    // Set initial selected card
    handleRotationChange(0);

    const animate = () => {
      rotation -= rotationSpeed; // Negative for left rotation
      if (rotation <= -360) {
        rotation = rotation + 360;
      }
      carouselRef.current?.rotate(rotation);
      
      // Calculate and update selected card
      const totalCards = cards.length;
      if (totalCards > 0) {
        const degreesPerCard = 360 / totalCards;
        const currentIndex = Math.round(-rotation / degreesPerCard);
        const positiveIndex = ((currentIndex % totalCards) + totalCards) % totalCards;
        
        // Only update if the index changed to avoid unnecessary re-renders
        if (positiveIndex !== lastSelectedIndex) {
          lastSelectedIndex = positiveIndex;
          setSelectedCardIndex(positiveIndex);
        }
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [is3DView, handleRotationChange, cards.length]);

  // Track selected card in 2D mode using scroll position
  useEffect(() => {
    if (is3DView || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollElement = container.querySelector('.animate-scroll-infinite') as HTMLElement;
    if (!scrollElement) return;

    const updateSelectedCard = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      
      const cardElements = container.querySelectorAll('[data-card-index]');
      let closestCardIndex = 0;
      let minDistance = Infinity;

      cardElements.forEach((cardEl) => {
        const cardRect = cardEl.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          const index = parseInt(cardEl.getAttribute('data-card-index') || '0', 10);
          closestCardIndex = index;
        }
      });

      setSelectedCardIndex(closestCardIndex);
    };

    // Initial check
    updateSelectedCard();

    // Update on scroll (for infinite scroll animation)
    const interval = setInterval(updateSelectedCard, 100);

    return () => {
      clearInterval(interval);
    };
  }, [is3DView, cards.length]);

  const stats = [
    { label: "Jackpot Value", value: jackpotValue.toFixed(3), highlighted: true, icon: "/assets/solana.png" },
    { label: "Your Wager", value: "0.000", icon: "/assets/solana.png" },
    { label: "Your Chance", value: "0.00", suffix: "%" },
    { label: "Time Remaining", value: `${String(timeLeft.minutes).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`, showTimer: true },
  ];

  return (
    <>
      <div className="relative flex items-start gap-4 mx-auto pl-4 sm:pl-6 lg:pl-8 pr-0">
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <JackpotBetting />
            </div>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <StatsGrid stats={stats} />
            </div>
            <div className={`relative mx-auto mb-4 sm:mb-5 lg:mb-6 w-full group ${is3DView ? 'overflow-visible' : ''}`}>
              {/* Arrow Button - Positioned above carousel */}
              <div className="absolute -top-4 left-1/2 z-30 animate-arrow-bounce">
                <button
                  type="button"
                  aria-label="Scroll to carousel"
                  className="relative transition-all duration-300 hover:scale-110 bg-transparent border-none p-0 cursor-pointer"
                >
                  <img
                    src="/assets/download.webp"
                    alt="Arrow button"
                    className="w-12 h-12 object-contain"
                    style={{
                      filter: 'drop-shadow(0 4px 12px rgba(103, 65, 255, 0.5))',
                    }}
                  />
                </button>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.35)]" />
              <button
                type="button"
                onClick={() => setIs3DView(!is3DView)}
                aria-label={is3DView ? "Switch to 2D View" : "Switch to 3D View"}
                className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-black/80 text-white border border-white/20 rounded-md px-2 py-1 text-xs leading-none flex items-center gap-1 transition-all duration-200"
              >
                {is3DView ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                    <span>3D</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span>2D</span>
                  </>
                  
                )}
              </button>
              <div className={`rounded-2xl backdrop-blur-sm px-3 sm:px-4 sm:py-8 flex items-center justify-center ${is3DView ? 'overflow-visible' : 'overflow-hidden'}`} style={{ backgroundColor: "rgba(22,22,22,1)", minHeight: 260 }}>
                {is3DView ? (
                  <div className="w-full flex items-center justify-center" style={{ overflow: 'visible', height: '230px'}}>
                    <ThreeDCarouselWrapper
                      ref={carouselRef}
                      rotateNegative={true}
                      style={{ width: "100%", height: "100%" }}
                      onRotationChange={handleRotationChange}
                    >
                      <style>
                        {`
                          #perspective-container {
                            perspective: 500px !important;
                          }
                          #items-container > div {
                            width: 210px;
                            height: 210px;
                            margin: 0px;
                            will-change: transform;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            backface-visibility: hidden;
                            transform-style: preserve-3d;
                          }
                          #items-container {
                            will-change: transform;
                            transform-style: preserve-3d;
                          }
                          /* Ensure Tailwind utilities work in Shadow DOM */
                          .flex { display: flex; }
                          .flex-col { flex-direction: column; }
                          .items-center { align-items: center; }
                          .justify-center { justify-content: center; }
                          .relative { position: relative; }
                          .absolute { position: absolute; }
                          .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
                          .w-full { width: 100%; }
                          .h-full { height: 100%; }
                          .rounded-xl { border-radius: 0.75rem; }
                          .rounded-lg { border-radius: 0.5rem; }
                          .rounded-full { border-radius: 9999px; }
                          .rounded-\\[10px\\] { border-radius: 10px; }
                          .rounded-\\[11px\\] { border-radius: 11px; }
                          .rounded-\\[13px\\] { border-radius: 13px; }
                          .rounded-\\[14px\\] { border-radius: 14px; }
                          .p-0\.5 { padding: 0.125rem; }
                          .p-2 { padding: 0.5rem; }
                          .mt-1 { margin-top: 0.25rem; }
                          .mt-3 { margin-top: 0.75rem; }
                          .mb-3 { margin-bottom: 0.75rem; }
                          .gap-1\.5 { gap: 0.375rem; }
                          .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
                          .text-base { font-size: 1rem; line-height: 1.5rem; }
                          .font-semibold { font-weight: 600; }
                          .font-bold { font-weight: 700; }
                          .text-white { color: rgb(255 255 255); }
                          .text-\\[\\#8c8c8c\\] { color: #8c8c8c; }
                          .max-w-\\[120px\\] { max-width: 120px; }
                          .truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                          .tracking-wide { letter-spacing: 0.025em; }
                          .opacity-0 { opacity: 0; }
                          .opacity-30 { opacity: 0.3; }
                          .opacity-50 { opacity: 0.5; }
                          .z-\\[1\\] { z-index: 1; }
                          .z-\\[3\\] { z-index: 3; }
                          .z-0 { z-index: 0; }
                          .-z-\\[1\\] { z-index: -1; }
                          .-mt-1 { margin-top: -0.25rem; }
                          .-bottom-\\[25\\.1312px\\] { bottom: -25.1312px; }
                          .object-cover { object-fit: cover; }
                          .overflow-hidden { overflow: hidden; }
                          .bg-\\[\\#141414\\] { background-color: #141414; }
                          .bg-black { background-color: rgb(0 0 0); }
                          .bg-black\\/70 { background-color: rgb(0 0 0 / 0.7); }
                          .transition-opacity { transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
                          .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
                          .duration-300 { transition-duration: 300ms; }
                          .duration-500 { transition-duration: 500ms; }
                          .blur-md { filter: blur(12px); }
                          .blur-2xl { filter: blur(40px); }
                          .aspect-square { aspect-ratio: 1 / 1; }
                        `}
                      </style>
                      {cards.map((player, index) => (
                        <div
                          key={player.id}
                          data-card-index={index}
                          onClick={() => !player.name.toLowerCase().includes("waiting") && handleGameCardClick(player)}
                          style={{ cursor: player.name.toLowerCase().includes("waiting") ? "default" : "pointer" }}
                        >
                          <GameCard player={player} />
                        </div>
                      ))}
                    </ThreeDCarouselWrapper>
                  </div>
                ) : (
                  <div className="overflow-hidden w-full" ref={scrollContainerRef}>
                    <div className="flex animate-scroll-infinite" style={{ width: "fit-content",height: '230px'}}>
                      {[...Array(2)].map((_, setIndex) => (
                        <div key={setIndex} className="flex">
                          {cards.map((player, index) => (
                            <div
                              key={`${setIndex}-${index}`}
                              data-card-index={index}
                              style={{ 
                                width: "210px", 
                                flexShrink: 0
                              }}
                              onClick={() => !player.name.toLowerCase().includes("waiting") && handleGameCardClick(player)}
                              className="cursor-pointer"
                            >
                              <GameCard player={player} />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <HistoryHeader playerCount={gamecards.length} roundNumber={175481} showSolanaInfo={true} />
              {userCardInfo.map((user) => (
                <div key={user.id} onClick={() => handleUserCardClick(user)}>
                  <UserCard player={user} />
                </div>
              ))}
              <HistoryFooter hashedSeed="0x1234567890" serverSeed="0x1234567890" eosBlock="1234567890" eosHash="0x1234567890" />
            </div>
          </div>
        </div>
        <div className="hidden xl:block w-[245px] flex-shrink-0 mr-4 sm:mr-6 lg:mr-8">
          <div className="sticky top-24">
            {showWinnerCard && (
              <div className="animate-fade-in">
                <WinnerCard
                  roundNumber={winnerData.roundNumber}
                  username={winnerData.username}
                  level={winnerData.level}
                  avatarUrl={winnerData.avatarUrl}
                  prizeAmount={winnerData.prizeAmount}
                  winChance={winnerData.winChance}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {isUserStatsModalOpen && selectedUserStats && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} onClick={handleCloseModal}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#161616] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseModal} className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors" aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <UserStats {...selectedUserStats} />
          </div>
        </div>
      )}
    </>
  );
};

export default Jackpot;


