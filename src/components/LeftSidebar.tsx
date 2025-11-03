import { ChevronLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AirdropWidget } from "./ui/airdropwidget";
import { MessageCard } from "./ui/messagecard";
import { chatMessages } from "./data/message_info";
import { UserProfileChip } from "./ui/userprofilechip";
import { ChatPausedBanner } from "./ui/chatpausebanner";
import { PauseIcon } from "./icons";
import { useState, useRef, useEffect } from "react";

const LeftSidebar = () => {
  const [isAtBottom, setIsAtBottom] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const threshold = 50; // Allow 50px threshold for "at bottom" detection
    const atBottom = scrollHeight - scrollTop - clientHeight <= threshold;
    
    setIsAtBottom(atBottom);
  };

  const scrollToBottom = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Check initial position
    handleScroll();

    // Add scroll listener
    container.addEventListener('scroll', handleScroll);
    
    // Check on resize
    window.addEventListener('resize', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <aside className="hidden sm:block fixed left-0 top-[109px] sm:w-[300px] lg:w-[350px] z-40 h-[calc(100vh-109px)] bg-[#141414] border-r border-border/50">
      <div className="flex flex-col h-full">
        {/* Airdrop Header */}
        <div className="border-b border-border/50">
          <AirdropWidget/>
        </div>

        {/* Chat Messages */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto p-3 scrollbar-hide"
          onScroll={handleScroll}
        >
          
          {chatMessages.map((msg, i) => (
            <div key={i} className="mb-4">
              <MessageCard avatarUrl={msg.avatarUrl} username={msg.username} message={msg.message} timestamp={msg.timestamp} />
              <UserProfileChip avatarUrl={msg.avatarUrl} username={msg.username} />
            </div>
          ))}         
        </div>
        {!isAtBottom && (
          <div className="text-center py-2">
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
  );
};

export default LeftSidebar;
