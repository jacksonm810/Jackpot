import React, { useState } from "react";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
} from "./affiliatesIcons";
import { WalletConnect } from "../WalletModal/walletconnect";
interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  iconBg?: string;
}
interface PanelCardProps {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  aspectRatio?: string;
  onDownload?: () => void;
  panels?: Array<{ src: string; alt?: string }>;
  indexOffset?: number;
}
interface AffiliatesDashboardProps {
  "data-id"?: string;
  onConnect?: () => void;
  onClaimEarnings?: () => void;
  earnings?: number;
  stats?: {
    users: number;
    totalWagered: number;
    totalEarned: number;
  };
}
const StatCard: React.FC<StatCardProps> = ({ icon, value, label, iconBg }) => (
  <div className="relative flex h-[84px] w-full items-center gap-3 bg-[#1D1D1D] border border-[#303030] rounded-lg p-4 transition-colors duration-300 hover:bg-[#252525]">
    <div
      className="relative aspect-square h-[50px] flex-shrink-0 transition-transform duration-300 hover:scale-105"
      style={{
        perspective: "1000px",
      }}
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {icon}
      </div>
      <img
        src="https://solpot.com/static/image/grid.34bbcfd0.webp"
        alt="Grid"
        className="h-full w-full animate-spin-slow"
      />
    </div>
    <div>
      <h4 className="text-base font-semibold leading-6">{value}</h4>
      <p className="mt-1 text-sm font-medium text-[#A2A2A2]">{label}</p>
    </div>
    <img
      src="data:image/webp;base64,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"
      alt="Pattern"
      className="absolute right-0 top-0 h-[82px] w-[222px]"
    />
  </div>
);
const PanelCard: React.FC<PanelCardProps> = ({
  title,
  icon,
  iconBg,
  aspectRatio = "1/1",
  onDownload,
  panels = [],
  indexOffset = 0,
}) => {
  const [activePanel, setActivePanel] = useState(1);
  return (
    <div className="w-full overflow-hidden bg-[#242424] rounded-lg">
      <div className="bg-[#1D1D1D] border border-[#303030] rounded-lg p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="flex h-6 w-6 items-center justify-center rounded-md"
              style={{
                backgroundColor: iconBg,
              }}
            >
              {icon}
            </div>
            <p className="text-sm font-semibold tracking-[0.35px]">{title}</p>
          </div>
          <div className="flex gap-0.5">
            {[1, 2].map((num) => (
              <button
                key={num}
                onClick={() => setActivePanel(num)}
                className={`flex h-6 w-6 min-w-0 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                  activePanel === num
                    ? "bg-[#303030] text-[#A2A2A2]"
                    : "bg-transparent text-[#A2A2A2]"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <div
          className="mt-4 bg-[#141414] rounded-lg overflow-hidden flex items-center justify-center"
          style={{ aspectRatio }}
        >
          {panels.length > 0 ? (
            (() => {
              const idx = (activePanel - 1 + indexOffset) % panels.length;
              const panel = panels[idx];
              return (
                <img
                  src={panel?.src}
                  alt={panel?.alt || title}
                  className="w-full h-full object-cover"
                />
              );
            })()
          ) : (
            <div className="w-full h-full bg-[#181818] rounded-lg animate-pulse" />
          )}
        </div>
      </div>
      <div className="bg-[#242424]">
        <button
          onClick={onDownload}
          className="flex h-10 w-full min-w-10 items-center justify-center text-sm font-semibold text-[#A2A2A2] bg-transparent hover:bg-[#303030] transition-colors px-4"
        >
          <div className="flex items-center justify-center gap-1">
            <Icon3 className="drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
            Download
          </div>
        </button>
      </div>
    </div>
  );
};
export const AffiliatesDashboard: React.FC<AffiliatesDashboardProps> = ({
  "data-id": dataId,
  onConnect,
  onClaimEarnings,
  earnings = 0,
  stats = {
    users: 0,
    totalWagered: 0,
    totalEarned: 0,
  },
}) => {
  const [timeRange, setTimeRange] = useState("Last 30 Days");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const handleConnectClick = () => {
    setIsWalletModalOpen(true);
    onConnect?.();
  };

  const handleCloseWalletModal = () => {
    setIsWalletModalOpen(false);
  };

  return (
    <div
      data-id={dataId}
      className="w-full text-white font-['Flama',sans-serif]"
    >
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes coinFloat {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50% { transform: translateY(-8px) rotate(6deg); }
        }
        @keyframes coin2Float {
          0%, 100% { transform: translateY(0) rotate(-31deg); }
          50% { transform: translateY(8px) rotate(-31deg); }
        }
        .animate-spin-slow {
          animation: rotate 20s linear infinite;
        }
        .animate-coin-float {
          animation: coinFloat 4s ease-in-out infinite;
        }
        .animate-coin2-float {
          animation: coin2Float 3s ease-in-out infinite reverse;
        }
      `}</style>
      <div className="max-w-[1064px] mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[40px] font-normal font-airstrike font-['Airstrike',sans-serif] mb-2">
            Affiliates
          </h1>
          <p className="text-base font-medium text-[#A2A2A2]">
            Share your referral link with friends and get paid for each bet
            placed! The more you share, the more you earn!
          </p>
        </div>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full lg:w-[340px] flex-shrink-0">
            {/* Connect Card (button centered inside) */}
            <div className="relative mb-6">
              <div className="relative w-full h-[219px] bg-[#181818] rounded-xl flex items-center justify-center">
                <div className="absolute z-[1] h-16 w-16 bg-[#6741FF] blur-[40px] rounded-full" />
                <button
                  onClick={handleConnectClick}
                  className="relative z-[2] bg-gradient-to-t from-[#222222] to-[#303030] rounded-2xl p-[3px] transition-opacity duration-300 hover:opacity-80"
                >
                  <div className="relative h-[46px] bg-gradient-to-b from-[#957AFF] to-[#6741FF] border border-[#1D1D1D] rounded-xl p-[2px]">
                    <div className="relative flex h-10 min-w-10 items-center justify-center gap-1.5 bg-[#6741FF] px-4 text-sm font-bold text-white rounded-[10px] text-shadow-[0_2px_0_rgba(0,0,0,0.5)] transition-colors">
                      <Icon1 className="h-5 w-5 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
                      Connect
                    </div>
                  </div>
                </button>
              </div>
            </div>
            {/* Telegram Panels */}
            <PanelCard
              title="Telegram Panels"
              icon={<Icon2 className="text-white" />}
              iconBg="#57A4FF"
              panels={[
                { src: "/assets/stream-panel.png", alt: "Daily Free Solana Case" },
                { src: "/assets/stream-panel1.png", alt: "Solana Jackpot Betting" },
              ]}
            />
            {/* Streamer Panels */}
            <div className="mt-6">
              <PanelCard
                title="Streamer Panels"
                icon={<Icon4 />}
                iconBg="#EA2E32"
                aspectRatio="306/70"
                panels={[
                  { src: "/assets/stream-panel-2.png", alt: "Daily Free Solana Case" },
                  { src: "/assets/stream-panel-1.png", alt: "Solana Jackpot Betting" },
                ]}
                indexOffset={1}
              />
            </div>
          </div>
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col gap-9">
            {/* Statistics Section */}
            <div>
              <p className="font-semibold text-white mb-4">Statistics</p>
              {/* Earnings Card */}
              <div className="bg-gradient-to-r from-[rgba(151,72,230,0.4)] via-[rgba(77,148,233,0.4)] to-[rgba(206,78,194,0.4)] rounded-xl p-[1px] mb-4">
                <div className="flex h-[104px] justify-between gap-1 bg-gradient-to-b from-[rgba(31,31,45,0)] to-[rgba(103,65,255,0.15)], from-[#1F1F2D] to-[#171721] rounded-[11px] px-8 py-6">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-[#A2A2A2]">
                      You've earned
                    </p>
                    <div className="flex items-center gap-1.5">
                      <Icon6 className="h-8 w-8" />
                      <h4 className="text-2xl font-bold">{earnings}</h4>
                    </div>
                  </div>
                  <div className="relative">
                    <Icon7 className="absolute -left-3 -top-2 opacity-50 animate-coin-float" />
                    <Icon8
                      className="absolute -left-3 -bottom-2 animate-coin2-float"
                      style={{
                        animationDirection: "reverse",
                      }}
                    />
                    <Icon9
                      className="absolute -right-3.5 -top-2.5 animate-coin-float"
                      style={{
                        animationDuration: "5s",
                        animationDirection: "reverse",
                      }}
                    />
                    <button
                      onClick={onClaimEarnings}
                      disabled={earnings === 0}
                      className="bg-gradient-to-t from-[#222222] to-[#303030] rounded-2xl p-[3px] transition-opacity disabled:opacity-50 disabled:cursor-default"
                    >
                      <div className="relative h-[46px] bg-gradient-to-b from-[#957AFF] to-[#6741FF] border border-[#1D1D1D] rounded-xl p-[2px]">
                        <div className="relative flex h-10 min-w-10 items-center justify-center bg-[#6741FF] px-4 text-sm font-bold text-white rounded-[10px]">
                          Claim <span className="ml-1">Earnings</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                <StatCard
                  icon={
                    <img
                      src="data:image/webp;base64,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"
                      alt=""
                      className="h-8 w-8"
                    />
                  }
                  value={stats.users}
                  label="Users"
                />
                <StatCard
                  icon={
                    <img
                      src="data:image/webp;base64,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"
                      alt=""
                      className="h-8 w-8"
                    />
                  }
                  value={stats.totalWagered}
                  label="Total Wagered"
                />
                <StatCard
                  icon={
                    <img
                      src="data:image/webp;base64,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"
                      alt=""
                      className="h-8 w-8"
                    />
                  }
                  value={stats.totalEarned}
                  label="Total Earned"
                />
              </div>
            </div>
            {/* Wager Stats Chart */}
            <div className="h-[461px]">
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">Wager Stats</p>
                  <div className="relative">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="relative flex h-10 items-center justify-center bg-[#303030] rounded-lg px-4 text-sm font-medium text-white transition-colors hover:bg-[#383838]"
                    >
                      <span>{timeRange}</span>
                      <Icon12 className="ml-2 -rotate-90 drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]" />
                    </button>
                    {isMenuOpen && (
                      <div className="absolute right-0 mt-2 w-44 rounded-lg border border-[#303030] bg-[#141414] text-white shadow-xl z-20">
                        {[
                          'All Time',
                          'Last 7 Days',
                          'Last 30 Days',
                          'Last 90 Days',
                        ].map((label) => (
                          <button
                            key={label}
                            onClick={() => {
                              setTimeRange(label);
                              setIsMenuOpen(false);
                            }}
                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#1f1f1f] ${
                              timeRange === label ? 'text-[#ad98ff]' : 'text-[#e5e5e5]'
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full h-[375px] bg-[#181818] rounded-xl animate-pulse" />
              <div className="my-6 h-px w-full bg-[#222222]" />
            </div>
            {/* Top Depositors Table */}
            <div>
              <p className="font-semibold text-white mb-4">Top Depositors</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 px-4 text-sm text-[#A2A2A2]">
                  <div className="w-[125.594px]">Name</div>
                  <div className="w-[100.484px]">Wagered</div>
                  <div className="w-[150.719px]">Commission</div>
                  <div className="w-[125.594px]">First Seen</div>
                  <div className="w-[125.594px] text-right">Last Seen</div>
                </div>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-full h-[54px] bg-[#181818] rounded-lg animate-pulse"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet Connect Modal */}
      {isWalletModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={handleCloseWalletModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            <WalletConnect />
          </div>
        </div>
      )}
    </div>
  );
};
