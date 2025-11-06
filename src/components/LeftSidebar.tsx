import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AirdropWidget } from "./ui/airdropwidget";
import { MessageCard } from "./ui/messagecard";
import { chatMessages } from "./data/message_info";
import { ChatPausedBanner } from "./ui/chatpausebanner";
import { PauseIcon } from "./icons";
import { useState, useRef, useEffect, useCallback } from "react";
import { UserProfilePopup } from "./ui/userprofilepopup";
import { UserStats } from "./ui/UserStatsModal/userstats";
import type { UserStatsProps } from "./ui/UserStatsModal/userstats";
import { useSidebar } from "@/contexts/SidebarContext";

const LeftSidebar = () => {
  const [isAtBottom, setIsAtBottom] = useState(true);
  const { isLeftSidebarVisible, setIsLeftSidebarVisible } = useSidebar();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [popup, setPopup] = useState<{
    username: string;
    level: number;
    avatarUrl: string;
    top: number;
    left: number;
  } | null>(null);
  const [isUserStatsModalOpen, setIsUserStatsModalOpen] = useState(false);
  const [selectedUserStats, setSelectedUserStats] = useState<UserStatsProps | null>(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const threshold = 50; // Allow 50px threshold for "at bottom" detection
    const atBottom = scrollHeight - scrollTop - clientHeight <= threshold;

    setIsAtBottom(atBottom);
    if (!atBottom) {
      // hide popup on scroll
      setPopup(null);
    }
  };

  const scrollToBottom = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Check initial position
    handleScroll();

    // Add scroll listener
    container.addEventListener("scroll", handleScroll);

    // Check on resize
    window.addEventListener("resize", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Close popup on outside click (anywhere except a messagecard or the popup itself)
  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const insidePopup = target.closest('[data-popup]');
      const onMessageCard = target.closest('[data-messagecard]');
      
      // Don't close if clicking inside popup or on message card
      if (insidePopup || onMessageCard) {
        return;
      }
      
      // Close popup if clicking outside
      setPopup(null);
    };
    document.addEventListener('mousedown', onDocMouseDown, true);
    return () => document.removeEventListener('mousedown', onDocMouseDown, true);
  }, []);

  const handleCloseUserStatsModal = useCallback(() => {
    setIsUserStatsModalOpen(false);
    setSelectedUserStats(null);
    setPopup(null); // Also close the profile popup
  }, []);

  const handleProfileClick = useCallback((user: { username: string; level: number; avatarUrl: string }) => {
    // Map user data to UserStatsProps
    setSelectedUserStats({
      username: user.username,
      level: user.level,
      avatarUrl: user.avatarUrl,
      joinDate: 'April 19, 2025', // Default or fetch from API
      netProfit: 1.8406,
      netProfitChange: 'negative',
      luckiestWin: 74.69,
      biggestWin: 8.607,
      totalWagered: 511.927,
      timeframe: 'Last 7 Days',
    });
    setIsUserStatsModalOpen(true);
    setPopup(null); // Close the profile popup
  }, []);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isUserStatsModalOpen) {
        handleCloseUserStatsModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isUserStatsModalOpen, handleCloseUserStatsModal]);

  const handleMessageClick = (
    e: React.MouseEvent<HTMLDivElement>,
    msg: { avatarUrl: string; username: string; level: number | undefined }
  ) => {
    // Place the popup relative to the mouse pointer, not just the element bounds,
    // so it appears right under the pointer like the reference.
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const POPUP_WIDTH = 176; // matches popup min width
    const POPUP_HEIGHT = 120; // approximate height
    const MARGIN = 4; // minimal gap under the pointer

    // For fixed-position popup, use client coordinates (viewport-based)
    const pointerX = e.clientX;
    const pointerY = e.clientY;

    // Default: show below-right of the pointer
    let left = pointerX + MARGIN;
    let top = pointerY + MARGIN;

    const maxLeft = viewportWidth - POPUP_WIDTH - MARGIN;
    const minLeft = MARGIN;

    // If going off the right edge, flip to the left of the pointer
    if (left > maxLeft) {
      left = pointerX - POPUP_WIDTH - MARGIN;
    }
    // Constrain horizontally
    left = Math.min(Math.max(left, minLeft), maxLeft);

    const maxTop = viewportHeight - POPUP_HEIGHT - MARGIN;
    const minTop = MARGIN;
    // If going off the bottom edge, flip above the pointer
    if (top > maxTop) {
      top = pointerY - POPUP_HEIGHT - MARGIN;
    }
    // Constrain vertically
    top = Math.min(Math.max(top, minTop), maxTop);

    setPopup({
      username: msg.username,
      level: msg.level ?? 0,
      avatarUrl: msg.avatarUrl,
      top,
      left,
    });
  };

  return (
    <>
      <aside 
        className={`hidden sm:block fixed top-[109px] sm:w-[300px] lg:w-[350px] z-40 h-[calc(100vh-109px)] bg-[#141414] border-r border-border/50 transition-all duration-300 ease-in-out ${
          isLeftSidebarVisible ? 'left-0 opacity-100' : '-left-[350px] opacity-0'
        }`}
      >
        <div className="flex flex-col h-full">
        {/* Airdrop Header */}
        <div className="border-b border-border/50">
          <AirdropWidget />
        </div>

        {/* Chat Messages */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide"
          onScroll={handleScroll}
        >
          {chatMessages.map((msg, i) => (
            <div
              key={i}
              className="mb-3 pl-3"
              data-messagecard
              onClick={(e) => handleMessageClick(e, msg)}
            >
              <MessageCard
                avatarUrl={msg.avatarUrl}
                username={msg.username}
                level={msg.level}
                message={msg.message}
                timestamp={msg.timestamp}
              />
            </div>
          ))}
        </div>
        {!isAtBottom && (
          <div className="px-3 py-2">
            <ChatPausedBanner
              text="Chat Paused"
              icon={<PauseIcon />}
              onClick={scrollToBottom}
            />
          </div>
        )}

        {/* Chat Input */}
        <div className="p-3 border-t border-border/50">
          <div className="relative">
            <Input
              placeholder="Type Message Here..."
              className="bg-secondary/50 border-border/50 pr-10"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary">
              😊
            </button>
          </div>
          <div className="flex items-center justify-between mt-2 text-xs">
            <button className="text-muted-foreground hover:text-foreground">
              📋 Chat Rules
            </button>
            <span className="text-muted-foreground">
              💬 <span className="text-foreground">160</span>
            </span>
          </div>
        </div>
      </div>
    </aside>
    {popup && (
      <UserProfilePopup
        username={popup.username}
        level={popup.level}
        avatarUrl={popup.avatarUrl}
        position={{ top: popup.top, left: popup.left }}
        onProfileClick={() => handleProfileClick(popup)}
      />
    )}

    {/* UserStats Modal */}
    {isUserStatsModalOpen && selectedUserStats && (
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        onClick={handleCloseUserStatsModal}
      >
        <div 
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#161616] rounded-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseUserStatsModal}
            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <UserStats {...selectedUserStats} />
        </div>
      </div>
    )}
    
    {/* Toggle Button */}
    <button
      onClick={() => setIsLeftSidebarVisible(!isLeftSidebarVisible)}
      className={`hidden sm:flex fixed top-[120px] z-50 items-center justify-center w-8 h-12 bg-[#1a1a1a] border border-border/50 rounded-r-md hover:bg-[#252525] transition-all duration-300 ${
        isLeftSidebarVisible ? 'left-[300px] lg:left-[350px]' : 'left-0'
      }`}
      aria-label={isLeftSidebarVisible ? 'Hide sidebar' : 'Show sidebar'}
    >
      <ChevronLeft 
        className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
          isLeftSidebarVisible ? '' : 'rotate-180'
        }`}
      />
    </button>
    </>
  );
};

export default LeftSidebar;
