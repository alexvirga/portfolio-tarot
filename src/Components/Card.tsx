// Card.tsx
import React from "react";
import { animated, to as interpolate } from "@react-spring/web";

interface CardProps {
  x: any;
  y: any;
  rotateY: any;
  cardImage: string;
  cardBackImage: string;
  onClick: () => void;
}

const flipTrans = (rotateY: number) =>
  `perspective(1500px) rotateY(${rotateY}deg)`;

const Card: React.FC<CardProps> = ({
  x,
  y,
  rotateY,
  cardImage,
  cardBackImage,
  onClick,
}) => {
  return (
    <animated.div
      style={{
        transform: interpolate(
          [x, y],
          (x, y) => `translate3d(${x}px,${y}px,0)`
        ),
      }}
      className="card"
      onClick={onClick}
    >
      <animated.div
        style={{
          transform: interpolate([rotateY], (rotateY) => flipTrans(rotateY)),
        }}
        className="card-inner"
      >
        <div className="card-face card-front">
          <img src={cardImage} alt="Card Front" />
        </div>
        <div className="card-face card-back">
          <img src={cardBackImage} alt="Card Back" />
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Card;
