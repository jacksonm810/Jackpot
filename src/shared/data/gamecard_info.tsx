export interface Player {
  id: number;
  name: string;
  amount: string;
  avatar: string;
  isActive: boolean;
}

const baseCards: Player[] = [
  {id:0, name: "iamzb", amount: "0.013", avatar: "https://solpot.com/cdn/avatars/420cd5cfdde190315b6e359343b1ac6444090333068ba04a63a7198eced0bd3c.jpeg", isActive: false},
  {id:1, name: "Solildeal", amount: "0.01", avatar: "https://solpot.com/avatars/9.x/thumbs/svg?seed=cupsy&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80", isActive: false},
  {id:2, name: "BOZO", amount: "0.03", avatar: "https://solpot.com/avatars/9.x/thumbs/svg?seed=cupsy&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80", isActive: false},
  {id:3, name: "pro", amount: "0.01", avatar: "https://solpot.com/avatars/9.x/thumbs/svg?seed=cupsy&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80", isActive: false},
  {id:4, name: "Camelot", amount: "0.001", avatar: "https://solpot.com/avatars/9.x/thumbs/svg?seed=cupsy&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80", isActive: false},
  {id:5, name: "Rockettt", amount: "0.003", avatar: "https://solpot.com/avatars/9.x/thumbs/svg?seed=cupsy&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80", isActive: false},
  {id:6, name: "Gibbo", amount: "0.097", avatar: "https://solpot.com/avatars/9.x/thumbs/svg?seed=cupsy&backgroundColor=ad98ff&shapeColor=f1f4dc&scale=80", isActive: false},
  {id:7, name: "Waiting", amount: "0.000", avatar: "❓", isActive: false},  
  {id:8, name: "Waiting", amount: "0.000", avatar: "❓", isActive: false},
  {id:9, name: "Waiting", amount: "0.000", avatar: "❓", isActive: false},
];

// Create 4 sets of cards (40 total - doubled from previous 20)
export const gamecards: Player[] = Array.from({ length: 4 }, (_, setIndex) =>
  baseCards.map((card) => ({
    ...card,
    id: setIndex * baseCards.length + card.id,
  }))
).flat();