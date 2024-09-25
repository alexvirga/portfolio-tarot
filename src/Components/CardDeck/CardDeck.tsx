// CardDeck.tsx
import React, { useState, useEffect } from "react";
import { useSprings } from "@react-spring/web";
import Card from "./Card";
import experienceImage from "../../assets/experience.png";
import aboutImage from "../../assets/aboutme.png";
import projectImage from "../../assets/projects.jpg";
import cardBackImage from "../../assets/cardBack.jpg";
import "./CardDeck.css";

const cards = [aboutImage, experienceImage, projectImage];

const isMobile = window.innerWidth <= 480;
const cardHeight = isMobile ? 200 : 300;
const containerHeight = window.innerHeight;
const totalCardHeight = cards.length * cardHeight;
const verticalPadding =
  (containerHeight - totalCardHeight) / (cards.length + 1);

const stacked = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const dealt = (i: number) => ({
  x: isMobile ? 0 : i * 220 - 220,
  y: isMobile
    ? verticalPadding * (i + 1) + cardHeight * i - containerHeight / 2.5
    : 0,
  scale: 1,
  rot: 0,
  delay: i * 200,
});

const from = (_i: number) => ({ x: 0, y: -1000, scale: 1.5 });

const CardDeck: React.FC<{ onCardClick: (view: string) => void }> = ({
  onCardClick,
}) => {
  const [dealtState, setDealtState] = useState(false);
  const [props, api] = useSprings(cards.length, (i) => from(i));
  const [flipSprings, flipApi] = useSprings(cards.length, () => ({
    rotateY: 180,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  // Deal cards
  useEffect(() => {
    const dealTimeout = setTimeout(() => {
      api.start((i) => stacked(i));
    }, 500);

    const flipTimeout = setTimeout(() => {
      setDealtState(true);
      api.start((i) => dealt(i));
    }, 1200);

    return () => {
      // cleanup
      clearTimeout(dealTimeout);
      clearTimeout(flipTimeout);
    };
  }, [api]);

  // Flip cards
  useEffect(() => {
    if (dealtState) {
      cards.forEach((_, index) => {
        setTimeout(() => {
          flipApi.start((i) => (i === index ? { rotateY: 0 } : {}));
        }, 200 + index * 100);
      });
    }
  }, [dealtState, flipApi]);

  return (
    <div className="deck-container">
      {props.map(({ x, y }, i) => (
        <Card
          key={i}
          x={x}
          y={y}
          rotateY={flipSprings[i].rotateY}
          cardImage={cards[i]}
          cardBackImage={cardBackImage}
          onClick={() =>
            onCardClick(i === 0 ? "About" : i === 1 ? "Experience" : "Projects")
          }
        />
      ))}
    </div>
  );
};

export default CardDeck;
