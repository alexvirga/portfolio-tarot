import React from "react";
import { animated, to as interpolate, SpringValue } from "@react-spring/web";
import cardBackImage from "../assets/cardBack.jpg";
import { animationConfig } from "./animations";

interface CardProps {
  x: SpringValue<number>;
  y: SpringValue<number>;
  rotateY: SpringValue<number>;
  frontImage: string;
  onClick: () => void;
}

export const Card: React.FC<CardProps> = ({
  x,
  y,
  rotateY,
  frontImage,
  onClick,
}) => (
  <animated.div
    style={{
      transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
    }}
    className="card"
    onClick={onClick}
  >
    <animated.div
      style={{ transform: interpolate([rotateY], animationConfig.flip) }}
      className="card-inner"
    >
      <div className="card-face card-front">
        <img src={frontImage} alt="Tarot Card Front" />
      </div>
      <div className="card-face card-back">
        <img src={cardBackImage} alt="Tarot Card Back" />
      </div>
    </animated.div>
  </animated.div>
);
