import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import Carousel3D from "../3d-carousel/src/index.js";

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "carousel-3d": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export interface ThreeDCarouselWrapperProps {
  children: React.ReactNode;
  vertical?: boolean;
  rotateNegative?: boolean;
  withOverlay?: boolean;
  itemsContainerElement?: string;
  debounceRerender?: number;
  noResize?: boolean;
  raw?: boolean;
  radiusMultiplier?: number;
  className?: string;
  style?: React.CSSProperties;
  onRotationChange?: (rotation: number) => void;
}

export interface ThreeDCarouselRef {
  carousel: Carousel3D | null;
  rotate: (degrees: number) => void;
  getCurrentRotation: () => number;
}

const ThreeDCarouselWrapper = forwardRef<ThreeDCarouselRef, ThreeDCarouselWrapperProps>(
  (
    {
      children,
      vertical = false,
      rotateNegative = false,
      withOverlay = false,
      itemsContainerElement,
      debounceRerender,
      noResize = false,
      raw = false,
      radiusMultiplier,
      className,
      style,
      onRotationChange,
    },
    ref
  ) => {
    const carouselRef = useRef<Carousel3D | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const rotationRef = useRef<number>(0);

    // Register the custom element
    useEffect(() => {
      if (typeof window !== "undefined" && !customElements.get("carousel-3d")) {
        customElements.define("carousel-3d", Carousel3D);
      }
    }, []);

    // Initialize carousel
    useEffect(() => {
      if (!containerRef.current) return;

      const carouselElement = containerRef.current.querySelector("carousel-3d") as Carousel3D;
      if (carouselElement) {
        carouselRef.current = carouselElement;

        // Set attributes
        if (vertical) carouselElement.setAttribute("vertical", "");
        if (rotateNegative) carouselElement.setAttribute("rotate-negative", "");
        if (withOverlay) carouselElement.setAttribute("with-overlay", "");
        if (noResize) carouselElement.setAttribute("no-resize", "");
        if (raw) carouselElement.setAttribute("raw", "");
        if (itemsContainerElement) {
          carouselElement.setAttribute("items-container-element", itemsContainerElement);
        }
        if (debounceRerender !== undefined) {
          carouselElement.setAttribute("debounce-rerender", debounceRerender.toString());
        }
        if (radiusMultiplier !== undefined) {
          carouselElement.setAttribute("radius-multiplier", radiusMultiplier.toString());
        }

        // Expose rotation methods
        const rotate = (degrees: number) => {
          if (carouselElement.itemsContainer) {
            rotationRef.current = degrees;
            const axis = vertical ? "X" : "Y";
            carouselElement.itemsContainer.style.transform = `rotate${axis}(${degrees}deg)`;
            onRotationChange?.(degrees);
          }
        };

        const getCurrentRotation = () => rotationRef.current;

        // Store methods on the element for ref access
        (carouselElement as any).rotate = rotate;
        (carouselElement as any).getCurrentRotation = getCurrentRotation;
      }
    }, [vertical, rotateNegative, withOverlay, itemsContainerElement, debounceRerender, noResize, raw, radiusMultiplier, onRotationChange]);

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      carousel: carouselRef.current,
      rotate: (degrees: number) => {
        if (carouselRef.current) {
          (carouselRef.current as any).rotate?.(degrees);
        }
      },
      getCurrentRotation: () => {
        if (carouselRef.current) {
          return (carouselRef.current as any).getCurrentRotation?.() ?? 0;
        }
        return 0;
      },
    }));

    return (
      <div ref={containerRef} className={className} style={style}>
        <carousel-3d >
          {children}
        </carousel-3d>
      </div>
    );
  }
);

ThreeDCarouselWrapper.displayName = "ThreeDCarouselWrapper";

export default ThreeDCarouselWrapper;

