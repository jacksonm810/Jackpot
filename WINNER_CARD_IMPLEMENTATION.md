# Winner Card Implementation Guide

## Overview
The Winner Card feature dynamically displays winner information in a fixed right sidebar when a jackpot round ends.

## Features Implemented

### ✅ 1. **Fixed Right Sidebar Layout**
- Positioned using **Flexbox** layout
- Appears on the right side of the main content
- Uses `sticky` positioning for smooth scrolling
- Hidden on mobile/tablet (`hidden xl:block`)
- Visible on large screens (≥1280px)

### ✅ 2. **Dynamic Winner Data**
The winner card displays:
- **Winner's Avatar**: Circular image (72x72px)
- **Winner's Name**: Username with character limit
- **Level Badge**: User level indicator
- **Round Number**: Current round identifier
- **Amount Won**: Prize amount in SOL
- **Win Chance**: Percentage chance (e.g., "21.55%")

### ✅ 3. **State Management**
```typescript
// Winner card visibility state
const [showWinnerCard, setShowWinnerCard] = useState(true);

// Winner data state
const [winnerData, setWinnerData] = useState({
  roundNumber: "#177885",
  username: "baby_grl...",
  level: 55,
  avatarUrl: "https://...",
  prizeAmount: 0.168,
  winChance: 10.83,
});
```

### ✅ 4. **showWinner Function**
Call this function when a round ends to update and display the winner:

```typescript
/**
 * Display winner card with updated data
 * @param winner - Winner information object
 */
showWinner({
  roundNumber: "#177885",
  username: "SHWING",
  level: 68,
  avatarUrl: "https://solpot.com/avatars/9.x/thumbs/svg?seed=SHWING",
  prizeAmount: 0.868,
  winChance: 21.55
});
```

### ✅ 5. **Smooth Animations**
- **Fade-in animation** when winner card appears
- **0.5s ease-out** transition
- Added custom Tailwind animation: `animate-fade-in`

### ✅ 6. **Responsive Design**
```css
/* Layout breakpoints */
- Mobile (< 1280px): Hidden
- Desktop (≥ 1280px): Visible in right sidebar
- Sticky positioning: top-24 (stays visible while scrolling)
```

## Layout Structure

```tsx
<section> // HeroSection
  <div className="flex"> // Flex container
    
    {/* Main Content Area */}
    <div className="max-w-4xl">
      <JackpotBetting />
      <StatsGrid />
      <GameCarousel />
      <HistorySection />
    </div>
    
    {/* Right Sidebar - Winner Card */}
    <div className="hidden xl:block w-[245px]">
      <div className="sticky top-24">
        {showWinnerCard && (
          <WinnerCard {...winnerData} />
        )}
      </div>
    </div>
    
  </div>
</section>
```

## Usage Examples

### Example 1: Show Winner After Timer Ends
```typescript
useEffect(() => {
  if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    showWinner({
      roundNumber: "#177885",
      username: "SHWING",
      level: 68,
      avatarUrl: "https://solpot.com/avatars/9.x/thumbs/svg?seed=SHWING",
      prizeAmount: 0.868,
      winChance: 21.55,
    });
  }
}, [timeLeft, showWinner]);
```

### Example 2: Show Winner from API Response
```typescript
// When receiving winner data from API
fetch('/api/jackpot/winner')
  .then(res => res.json())
  .then(data => {
    showWinner({
      roundNumber: data.roundNumber,
      username: data.winner.username,
      level: data.winner.level,
      avatarUrl: data.winner.avatarUrl,
      prizeAmount: data.prizeAmount,
      winChance: data.winChance,
    });
  });
```

### Example 3: Hide Winner Card (Optional)
```typescript
// Manually hide the winner card
setShowWinnerCard(false);

// Or auto-hide after 10 seconds
setTimeout(() => setShowWinnerCard(false), 10000);
```

## Styling Details

### Winner Card Component
- **Width**: 225px
- **Height**: 272.609px
- **Background**: Gradient from #222222 to #1e1a2d
- **Border Radius**: 14px
- **Box Shadow**: Multi-layered depth effect
- **Avatar**: 72x72px circular with border

### Animation
```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Technical Implementation

### Files Modified
1. **`src/components/HeroSection.tsx`**
   - Added winner state management
   - Added `showWinner` function
   - Restructured layout with flex container
   - Added right sidebar for winner card

2. **`tailwind.config.ts`**
   - Added `fade-in` keyframe animation
   - Added `animate-fade-in` utility class

3. **`src/components/ui/winnercard.tsx`**
   - Already implemented (no changes needed)
   - Accepts all required props dynamically

## Testing

### Manual Testing Steps
1. ✅ Verify winner card appears on screens ≥1280px
2. ✅ Verify winner card is hidden on mobile/tablet
3. ✅ Test `showWinner` function with different data
4. ✅ Check fade-in animation smoothness
5. ✅ Verify sticky positioning while scrolling
6. ✅ Test responsive layout at different breakpoints

### Browser Compatibility
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (hidden by design)

## Future Enhancements

### Potential Features
1. **Multiple Winner Cards**: Stack multiple recent winners
2. **Auto-rotation**: Cycle through recent winners
3. **Sound Effects**: Play sound when winner appears
4. **Confetti Animation**: Celebratory animation
5. **WebSocket Integration**: Real-time winner updates
6. **Winner History**: Show last 5 winners in sidebar

### Optional Modifications
```typescript
// Auto-hide after display
const showWinner = (winner) => {
  setWinnerData(winner);
  setShowWinnerCard(true);
  
  // Hide after 10 seconds
  setTimeout(() => setShowWinnerCard(false), 10000);
};

// Add celebration sound
const showWinner = (winner) => {
  setWinnerData(winner);
  setShowWinnerCard(true);
  
  // Play winner sound
  new Audio('/sounds/winner.mp3').play();
};
```

## Summary

### ✅ Requirements Completed
- ✅ Winner card positioned in right sidebar
- ✅ Dynamic data display (avatar, name, amount, chance)
- ✅ Modern design with rounded corners and shadows
- ✅ Absolute/sticky positioning for fixed placement
- ✅ Initial visibility control (show/hide)
- ✅ Smooth fade-in animation
- ✅ Fully responsive design
- ✅ `showWinner` function to trigger display
- ✅ TypeScript integration
- ✅ React state management

The winner card is now fully functional and ready for integration with your game logic!
