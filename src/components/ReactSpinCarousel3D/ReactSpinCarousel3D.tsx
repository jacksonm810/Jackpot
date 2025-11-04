import React, { useEffect, useState, useCallback, useRef } from "react";
import styles from "./ReactSpinCarousel3D.module.css";

export interface BaseCarouselProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  width?: string | number;
  height?: string | number;
  itemWidth?: string | number;
  accentColor?: string;
  backgroundColor?: string;
  initialActiveIndex?: number;
  isAutoPlay?: boolean;
  autoPlayInterval?: number;
  showRadioButtons?: boolean;
  customRadioButtons?: (
    index: number,
    isActive: boolean,
    setActiveIndex: (index: number) => void
  ) => React.ReactNode;
  radioButtonStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  onItemClick?: (item: T, index: number) => void;
  displayMode?: "image" | "card";
  imageFit?: "cover" | "contain" | "fill";
  imagePosition?: string;
}

export interface CardModeProps<T> extends BaseCarouselProps<T> {
  displayMode?: "card";
}

export interface ImageModeProps<T> extends BaseCarouselProps<T> {
  displayMode: "image";
  imageFit?: "cover" | "contain" | "fill";
  imagePosition?: string;
}

export type CarouselProps<T> = CardModeProps<T> | ImageModeProps<T>;

const DEFAULT_ITEM_WIDTH_VALUE = 200;

const ReactSpinCarousel3D = <T,>({
  data,
  renderItem,
  width = "100vw",
  height = 300,
  itemWidth = DEFAULT_ITEM_WIDTH_VALUE,
  accentColor = "hsl(263, 70%, 62%)",
  backgroundColor = "hsl(250, 40%, 10%)",
  initialActiveIndex = Math.floor(data.length / 2),
  isAutoPlay = true,
  autoPlayInterval = 3000,
  showRadioButtons = false,
  customRadioButtons,
  radioButtonStyle = {},
  containerStyle = {},
  itemStyle = {},
  onItemClick,
  displayMode = "card",
  imageFit = "cover",
  imagePosition = "center",
}: CarouselProps<T>) => {
  // Create duplicated data for seamless loop
  const extendedData = [...data, ...data, ...data];
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex + data.length);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isResetting = useRef(false);

  const handleItemClick = useCallback(
    (item: T, index: number) => {
      if (onItemClick) {
        onItemClick(item, index);
      }
    },
    [onItemClick]
  );

  // Auto-play functionality with seamless loop
  useEffect(() => {
    if (isAutoPlay && !isPaused && !isDragging && !isResetting.current) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isPaused, isAutoPlay, autoPlayInterval, isDragging]);

  // Reset position when reaching the end for seamless loop
  useEffect(() => {
    // If we've moved past the second copy, reset to the first copy
    if (activeIndex >= data.length * 2) {
      isResetting.current = true;
      setTimeout(() => {
        setActiveIndex(data.length);
        setTimeout(() => {
          isResetting.current = false;
        }, 50);
      }, 600); // Match transition duration
    }
    // If we've moved before the first copy, reset to the second copy
    else if (activeIndex < data.length) {
      isResetting.current = true;
      setTimeout(() => {
        setActiveIndex(data.length * 2 - 1);
        setTimeout(() => {
          isResetting.current = false;
        }, 50);
      }, 600);
    }
  }, [activeIndex, data.length]);

  // Touch and mouse event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      setCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      const dragDistance = startX - currentX;
      if (Math.abs(dragDistance) > 50) {
        if (dragDistance > 0) {
          setActiveIndex((prevIndex) => prevIndex + 1);
        } else {
          setActiveIndex((prevIndex) => prevIndex - 1);
        }
      }
      setIsDragging(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setCurrentX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsPaused(false);
    if (isDragging) {
      const dragDistance = startX - currentX;
      if (Math.abs(dragDistance) > 50) {
        if (dragDistance > 0) {
          setActiveIndex((prevIndex) => prevIndex + 1);
        } else {
          setActiveIndex((prevIndex) => prevIndex - 1);
        }
      }
      setIsDragging(false);
    }
  };

  return (
    <section
      className={styles.carouselContainer}
      style={
        {
          width: typeof width === "number" ? `${width}px` : width,
          "--accent-color": accentColor,
          "--background-color": backgroundColor,
          "--image-fit": imageFit,
          "--image-position": imagePosition,

          ...containerStyle,
        } as React.CSSProperties
      }
    >
      <div
        className={styles.itemsContainer}
        style={
          {
            height: typeof height === "number" ? `${height}px` : height,
            "--item-width":
              typeof itemWidth === "number"
                ? itemWidth
                : parseFloat(itemWidth) || 0,
          } as React.CSSProperties
        }
      >
        {extendedData.map((item, index) => {
          const rotation = activeIndex - index;
          const itemTransformValue =
            typeof itemWidth === "number"
              ? itemWidth
              : parseFloat(itemWidth) || 0;
          
          // Adjust rotation angle to show more items (less rotation = more visible items)
          const rotationAngle = rotation * -6; // Reduced from -10 to -6 for wider view
          const translateX = rotation * -itemTransformValue * 0.8; // Slightly reduce spacing
          
          // Calculate opacity based on distance from center
          const distance = Math.abs(rotation);
          const maxVisibleDistance = 5; // Show items up to 5 positions away
          const opacity = distance <= maxVisibleDistance 
            ? Math.max(0.3, 1 - distance * 0.15) 
            : 0;

          // Calculate original index for item click
          const originalIndex = index % data.length;

          return (
            <div
              key={index}
              className={`${styles.carouselItem} ${
                displayMode === "image" ? styles.imageMode : styles.cardMode
              }`}
              style={
                {
                  "--item-width": itemTransformValue,
                  transform: `
                      translateX(-50%) 
                      rotateY(${rotationAngle}deg) 
                      translateX(${translateX}px)
                    `,
                  zIndex: extendedData.length - Math.abs(rotation),
                  backgroundColor:
                    displayMode === "card" ? backgroundColor : "transparent",
                  opacity: displayMode === "image" ? opacity : (opacity > 0 ? 1 : 0),
                  transition: isDragging || isResetting.current
                    ? "none"
                    : "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
                  pointerEvents: opacity > 0.3 ? "auto" : "none",
                  ...itemStyle,
                } as React.CSSProperties
              }
              onClick={() => handleItemClick(item, originalIndex)}
              onMouseEnter={() => setIsPaused(true)}
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {renderItem(item, originalIndex)}
            </div>
          );
        })}
      </div>

      {customRadioButtons ? (
        <div className={styles.radioButtonsContainer}>
          {data.map((_, index) => (
            <React.Fragment key={index}>
              {customRadioButtons(
                index,
                (activeIndex % data.length) === index,
                (idx) => setActiveIndex(idx + data.length)
              )}
            </React.Fragment>
          ))}
        </div>
      ) : showRadioButtons ? (
        <div className={styles.radioButtonsContainer}>
          {data.map((_, index) => (
            <input
              type="radio"
              name={`carousel-${Math.random().toString(36).substring(2, 9)}`}
              className={styles.radioButton}
              checked={(activeIndex % data.length) === index}
              onChange={() => setActiveIndex(index + data.length)}
              style={{
                ...radioButtonStyle,
                borderColor: accentColor,
              }}
              key={index}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
};

export default ReactSpinCarousel3D;
