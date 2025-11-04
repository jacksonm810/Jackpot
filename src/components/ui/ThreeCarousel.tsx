import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

interface PlayerCard {
  name: string;
  amount: string;
  avatar: string;
  active: boolean;
}

interface CarouselCardProps {
  card: PlayerCard;
  index: number;
  totalCards: number;
  currentRotation: number;
  onCardClick: (index: number) => void;
  isFlipped: boolean;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ 
  card, 
  index, 
  totalCards, 
  currentRotation,
  onCardClick,
  isFlipped 
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const radius = 4;
  const angleStep = (Math.PI * 2) / totalCards;
  const angle = index * angleStep - currentRotation;

  // Calculate position
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;
  const y = 0;

  // Calculate if card is visible (front-facing)
  const normalizedAngle = ((angle + Math.PI) % (Math.PI * 2)) - Math.PI;
  const isVisible = Math.abs(normalizedAngle) < Math.PI * 0.6;

  // Calculate opacity and scale based on position
  const distanceFromFront = Math.abs(normalizedAngle) / Math.PI;
  const opacity = isVisible ? Math.max(0.4, 1 - distanceFromFront * 0.6) : 0;
  const scale = isVisible ? 1 - distanceFromFront * 0.3 : 0.5;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.set(x, y, z);
      meshRef.current.rotation.y = -angle;
      meshRef.current.scale.setScalar(scale);
    }
  });

  if (!isVisible) return null;

  return (
    <mesh ref={meshRef} position={[x, y, z]}>
      <planeGeometry args={[1.6, 2]} />
      <meshBasicMaterial transparent opacity={0} />
      <Html
        transform
        distanceFactor={1.5}
        position={[0, 0, 0.01]}
        style={{
          opacity: opacity,
          transition: 'opacity 0.3s ease',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <div
          onClick={() => onCardClick(index)}
          className={cn(
            "cursor-pointer select-none",
            "transition-transform duration-700 ease-in-out",
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          )}
          style={{
            transformStyle: 'preserve-3d',
            width: '160px',
          }}
        >
          {/* Front of card */}
          <div
            className={cn(
              "glass-panel rounded-2xl p-4 flex flex-col items-center justify-center gap-3",
              "transition-all duration-300 hover:scale-105",
              card.active ? "border-2 border-primary/50 glow-primary" : "border border-border/20",
              "[backface-visibility:hidden]"
            )}
            style={{ width: '160px', minHeight: '180px' }}
          >
            <div 
              className={cn(
                "w-20 h-20 rounded-2xl flex items-center justify-center text-4xl border-2",
                card.active 
                  ? 'bg-gradient-to-br from-primary/30 to-accent/30 border-primary/50' 
                  : 'bg-secondary/30 border-border/20'
              )}
            >
              {card.avatar}
            </div>
            <div className="text-center w-full">
              <p className={cn(
                "text-sm mb-1 font-medium",
                card.active ? 'text-primary' : 'text-muted-foreground'
              )}>
                {card.name}
              </p>
              <div className="flex items-center justify-center gap-1">
                <span className="text-primary text-xs">≡</span>
                <p className={cn(
                  "text-base font-bold",
                  card.active ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  {card.amount}
                </p>
              </div>
            </div>
          </div>

          {/* Back of card */}
          <div
            className={cn(
              "absolute inset-0 glass-panel rounded-2xl p-4",
              "flex flex-col items-center justify-center gap-2",
              "bg-gradient-to-br from-primary/20 to-accent/20",
              "border-2 border-primary/30",
              "[transform:rotateY(180deg)] [backface-visibility:hidden]"
            )}
            style={{ width: '160px', minHeight: '180px' }}
          >
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-2">Player Stats</p>
              <div className="space-y-1.5">
                <div className="flex justify-between gap-3">
                  <span className="text-xs text-muted-foreground">Win Rate</span>
                  <span className="text-xs font-bold text-primary">
                    {Math.floor(Math.random() * 40 + 30)}%
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-xs text-muted-foreground">Games</span>
                  <span className="text-xs font-bold">
                    {Math.floor(Math.random() * 100 + 10)}
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-xs text-muted-foreground">Total Won</span>
                  <span className="text-xs font-bold text-green-400">
                    {(Math.random() * 5).toFixed(2)} SOL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Html>
    </mesh>
  );
};

const CarouselScene: React.FC<{
  cards: PlayerCard[];
  rotation: number;
  flippedCards: number[];
  onCardClick: (index: number) => void;
}> = ({ cards, rotation, flippedCards, onCardClick }) => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 6);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      {cards.map((card, index) => (
        <CarouselCard
          key={index}
          card={card}
          index={index}
          totalCards={cards.length}
          currentRotation={rotation}
          onCardClick={onCardClick}
          isFlipped={flippedCards.includes(index)}
        />
      ))}
    </>
  );
};

interface ThreeCarouselProps {
  cards: PlayerCard[];
  autoRotate?: boolean;
  rotationSpeed?: number;
}

export const ThreeCarousel: React.FC<ThreeCarouselProps> = ({
  cards,
  autoRotate = true,
  rotationSpeed = 0.002,
}) => {
  const [rotation, setRotation] = useState(0);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev + rotationSpeed);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [autoRotate, rotationSpeed]);

  const handleCardClick = (index: number) => {
    setFlippedCards((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return [...prev, index];
    });
  };

  const handleRotateLeft = () => {
    setRotation((prev) => prev - Math.PI / cards.length);
  };

  const handleRotateRight = () => {
    setRotation((prev) => prev + Math.PI / cards.length);
  };

  return (
    <div className="relative w-full h-[320px] overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <CarouselScene
            cards={cards}
            rotation={rotation}
            flippedCards={flippedCards}
            onCardClick={handleCardClick}
          />
        </Suspense>
      </Canvas>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        <button
          onClick={handleRotateLeft}
          className="p-2 glass-panel rounded-lg hover:bg-primary/20 transition-colors backdrop-blur-md"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={handleRotateRight}
          className="p-2 glass-panel rounded-lg hover:bg-primary/20 transition-colors backdrop-blur-md"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
