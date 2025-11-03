import { useEffect, useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Canvas } from "@react-three/fiber";
import CoinCanvas from "./CoinCanvas";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 0, seconds: 0 });
  const [jackpotValue] = useState(0.058);

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

  return (
    <section className="pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Jackpot Header */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Suspense fallback={<div className="w-16 h-16" />}>
            <CoinCanvas />
          </Suspense>
          <div>
            <h1 className="text-5xl font-bold tracking-wider mb-1">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                JACKPOT
              </span>
            </h1>
            <p className="text-sm text-muted-foreground">Winner takes all...</p>
          </div>
        </div>

        {/* Betting Controls */}
        <div className="glass-panel rounded-2xl p-5 mb-5 max-w-3xl mx-auto border border-border/30">
          <div className="mb-3">
            <label className="text-xs text-muted-foreground mb-2 block">Bet Amount ~$0</label>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary">≈</span>
                <Input
                  type="number"
                  defaultValue="0"
                  className="bg-secondary/50 border-border/50 text-lg font-bold pl-8 h-11"
                />
              </div>
              <Button variant="outline" className="hover:bg-primary/10 hover:text-primary border-border/50 h-11 px-4">
                +0.1
              </Button>
              <Button variant="outline" className="hover:bg-primary/10 hover:text-primary border-border/50 h-11 px-4">
                +1
              </Button>
            </div>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90 text-base py-5 glow-primary animate-pulse-glow font-bold">
            Place Bet
          </Button>
        </div>

        {/* Jackpot Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="glass-panel rounded-xl p-3 text-center border-2 border-primary/50 glow-primary">
            <p className="text-xs text-muted-foreground mb-1">≈ Jackpot Value</p>
            <p className="text-2xl font-bold text-primary">{jackpotValue.toFixed(3)}</p>
          </div>
          <div className="glass-panel rounded-xl p-3 text-center border border-border/30">
            <p className="text-xs text-muted-foreground mb-1">≈ Your Wager</p>
            <p className="text-2xl font-bold">0.000</p>
          </div>
          <div className="glass-panel rounded-xl p-3 text-center border border-border/30">
            <p className="text-xs text-muted-foreground mb-1">Your Chance</p>
            <p className="text-2xl font-bold">0.00%</p>
          </div>
          <div className="glass-panel rounded-xl p-3 text-center border border-border/30">
            <p className="text-xs text-muted-foreground mb-1">Time Remaining</p>
            <p className="text-2xl font-bold text-accent">
              {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Winner Indicator */}
        <div className="flex justify-center mb-3">
          <div className="text-primary text-2xl animate-bounce">▼</div>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-5">
          {[
            { name: "iamzb", amount: "0.013", avatar: "🔥", active: false },
            { name: "Solildeal", amount: "0.01", avatar: "😊", active: true },
            { name: "Solildeal", amount: "0.01", avatar: "😊", active: false },
            { name: "BOZO", amount: "0.03", avatar: "🎮", active: false },
            { name: "pro", amount: "0.01", avatar: "💎", active: false },
            { name: "Waiting", amount: "0.000", avatar: "❓", active: false },
            { name: "Waiting", amount: "0.000", avatar: "❓", active: false },
            { name: "Waiting", amount: "0.000", avatar: "❓", active: false },
            { name: "Waiting", amount: "0.000", avatar: "❓", active: false },
            { name: "Waiting", amount: "0.000", avatar: "❓", active: false },
          ].map((player, i) => (
            <div
              key={i}
              className={`glass-panel rounded-xl p-3 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-105 ${
                player.active ? "border-2 border-primary/50 glow-primary" : "border border-border/30"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl ${player.active ? 'bg-gradient-to-br from-primary/30 to-accent/30' : 'bg-secondary/50'} flex items-center justify-center text-2xl border ${player.active ? 'border-primary/50' : 'border-border/30'}`}>
                {player.avatar}
              </div>
              <div className="text-center w-full">
                <p className={`text-xs mb-0.5 ${player.active ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                  {player.name}
                </p>
                <p className={`text-sm font-bold ${player.active ? 'text-primary' : ''}`}>
                  ≈ {player.amount}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Players Info */}
        <div className="glass-panel rounded-xl p-3 border border-border/30">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-primary">👥</span>
              <span className="font-semibold">7 Players</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">≈</span>
              <span>Payouts are settled in SOL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">#</span>
              <span className="font-mono">Round: 175481</span>
            </div>
          </div>
        </div>

        {/* Recent Winners Section */}
        <div className="mt-6 glass-panel rounded-xl p-4 border border-border/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
              <span className="text-2xl">💎</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-sm">Camelot</span>
                  <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">3</span>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Chance</div>
                  <div className="font-bold text-primary text-sm">2.26%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-secondary/30 rounded-lg p-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-lg">🎲</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold">≈ 0.001</div>
              <div className="text-xs text-red-400">~$0.18</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
