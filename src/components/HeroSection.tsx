import { useEffect, useState, Suspense } from "react";
import { StatsGrid } from "./ui/statsgrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Canvas } from "@react-three/fiber";
import CoinCanvas from "./CoinCanvas";
import { JackpotBetting } from "./ui/Jakpotbetting";
import ReactSpinCarousel3D from "./ReactSpinCarousel3D/ReactSpinCarousel3D";
import { HistoryHeader } from "./ui/historyheader";
import { HistoryFooter } from "./ui/historyfooter";
import { UserCard } from "./ui/usercard";
import { userCardInfo } from "./data/usercard_infor";

interface PlayerCard {
  name: string;
  amount: string;
  avatar: string;
  active: boolean;
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });
  const [jackpotValue] = useState(0.058);

  const playerCards: PlayerCard[] = [
    { name: "iamzb", amount: "0.013", avatar: "🔥", active: false },
    { name: "Solildeal", amount: "0.01", avatar: "😊", active: true },
    { name: "BOZO", amount: "0.03", avatar: "🎮", active: false },
    { name: "pro", amount: "0.01", avatar: "💎", active: false },
    { name: "Camelot", amount: "0.001", avatar: "💎", active: false },
    { name: "Rockettt", amount: "0.003", avatar: "🚀", active: false },
    { name: "Gibbo", amount: "0.097", avatar: "👻", active: false },
    { name: "Waiting", amount: "0.000", avatar: "❓", active: false },
    { name: "Waiting", amount: "0.000", avatar: "❓", active: false },
    { name: "Waiting", amount: "0.000", avatar: "❓", active: false },
  ];

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

  const stats = [
    {
      label: "Jackpot Value",
      value: jackpotValue.toFixed(3),
      highlighted: true,
      icon: "/assets/solana.png",
    },
    {
      label: "Your Wager",
      value: "0.000",
      icon: "/assets/solana.png",
    },
    {
      label: "Your Chance",
      value: "0.00",
      suffix: "%",
    },
    {
      label: "Time Remaining",
      value: `${String(timeLeft.minutes).padStart(2, "0")}:${String(
        timeLeft.seconds
      ).padStart(2, "0")}`,
      showTimer: true,
    },
  ];

  return (
    <section className="pt-20 pb-12">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Betting Controls */}
        <div className="mb-5 max-w-4xl mx-auto">
          <JackpotBetting />
        </div>

        {/* Jackpot Stats */}
        <div className="mb-6 max-w-4xl mx-auto">
          <StatsGrid stats={stats} />
        </div>

        {/* Winner Indicator */}
        <div className="flex justify-center mb-3">
          <div className="text-primary text-2xl animate-bounce">▼</div>
        </div>

        {/* Game Carousel */}
        <div className="mb-5 max-w-6xl mx-auto">
          <ReactSpinCarousel3D<PlayerCard>
            data={playerCards}
            renderItem={(player, index) => (
              <div className="h-full w-full flex flex-col items-center justify-center gap-2 p-4">
                <div
                  className={`w-14 h-14 rounded-xl ${
                    player.active
                      ? "bg-gradient-to-br from-primary/30 to-accent/30"
                      : "bg-secondary/50"
                  } flex items-center justify-center text-2xl border ${
                    player.active ? "border-primary/50" : "border-border/30"
                  }`}
                >
                  {player.avatar}
                </div>
                <div className="text-center w-full">
                  <p
                    className={`text-xs mb-0.5 ${
                      player.active
                        ? "text-primary font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {player.name}
                  </p>
                  <p
                    className={`text-sm font-bold ${
                      player.active ? "text-primary" : ""
                    }`}
                  >
                    ≈ {player.amount}
                  </p>
                </div>
              </div>
            )}
            width="100%"
            height={200}
            itemWidth={180}
            isAutoPlay={true}
            autoPlayInterval={4000}
            showRadioButtons={false}
            displayMode="card"
            backgroundColor="transparent"
          />
        </div>

        {/* Players Info */}
        <div className="mb-5 max-w-4xl mx-auto">
          <HistoryHeader
            playerCount={playerCards.length}
            roundNumber={175481}
            showSolanaInfo={true}
          />

          {/* Recent Winners Section */}
          {userCardInfo.map((user) => (
            <UserCard key={user.id} player={user} />
          ))}
          <HistoryFooter
            hashedSeed="0x1234567890"
            serverSeed="0x1234567890"
            eosBlock="1234567890"
            eosHash="0x1234567890"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
