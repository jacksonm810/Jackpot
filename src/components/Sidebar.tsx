const Sidebar = () => {
  const previousRounds = [
    { round: 175216, user: "sidanya", level: 11, won: "0.369", chance: "3.11%", avatar: "😊", badge: "LUCK OF THE DAY ⭐" },
    { round: 175215, user: "BOZO", level: 11, won: "0.369", chance: "3.11%", avatar: "🎮", badge: null },
  ];

  return (
    <aside className="hidden lg:block fixed right-0 top-[109px] w-80 h-[calc(100vh-109px)] bg-[#141414] border-l border-border/50 overflow-y-auto">
      <div className="p-3 space-y-3">
        {/* Current Round */}
        <div className="glass-panel rounded-xl p-3 border border-primary/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">ROUND</span>
            <span className="text-xs font-mono">#175216</span>
          </div>
          
          <div className="flex items-center justify-center mb-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30">
              <span className="text-3xl">😊</span>
            </div>
          </div>

          <div className="text-center mb-3">
            <div className="text-base font-bold mb-1">BOZO</div>
            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">11</span>
          </div>

          <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg p-2 mb-2">
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">LAST WINNER</div>
              <div className="text-xl font-bold text-primary glow-primary">🎉</div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Won</span>
              <span className="font-bold text-primary">≈ 0.383</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Chance</span>
              <span className="font-bold text-accent">82.84%</span>
            </div>
          </div>
        </div>

        {/* Previous Rounds */}
        {previousRounds.map((round, i) => (
          <div key={i} className="glass-panel rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">ROUND</span>
              <span className="text-xs font-mono">#{round.round}</span>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center text-2xl">
                {round.avatar}
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm mb-0.5">{round.user}</div>
                <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">{round.level}</span>
              </div>
            </div>

            {round.badge && (
              <div className="bg-accent/10 rounded-lg p-1.5 mb-2">
                <div className="text-xs text-center font-medium">
                  {round.badge}
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Won</span>
                <span className="font-bold text-primary">≈ {round.won}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Chance</span>
                <span className="font-bold text-accent">{round.chance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
