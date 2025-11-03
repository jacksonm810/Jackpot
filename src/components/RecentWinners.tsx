const RecentWinners = () => {
  const winners = [
    { name: "LIGHTING", avatar: "🔥", amount: "0.069", change: "-$12.66", chance: "16.03%" },
    { name: "shoyamiya", avatar: "😊", amount: "0.111", change: "+$8.23", chance: "25.00%" },
    { name: "Princess", avatar: "👸", amount: "0.508", change: "+$45.12", chance: "46.00%" },
  ];

  return (
    <div className="container mx-auto max-w-6xl px-4 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {winners.map((winner, i) => (
          <div key={i} className="glass-panel rounded-xl p-4 border border-primary/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center text-2xl">
                {winner.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold">{winner.name}</span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {winner.chance}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-semibold">≈ {winner.amount}</span>
                  <span className={winner.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                    {winner.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentWinners;
