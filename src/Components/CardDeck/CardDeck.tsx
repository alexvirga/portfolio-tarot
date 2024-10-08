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
const totalCardHeight = cards.length * cardHeight;
const containerHeight = window.innerHeight;
const dynamicContainerHeight =
  containerHeight - (window.visualViewport?.offsetTop || 0); // Consider dynamic height
const verticalPadding =
  (dynamicContainerHeight - totalCardHeight) / (cards.length + 1);

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
    ? verticalPadding * (i + 1) + cardHeight * i - dynamicContainerHeight / 2.5
    : 0,
  scale: 1,
  rot: 0,
  delay: i * 200,
});

const from = (_i: number) => ({ x: 0, y: -1000, scale: 1.5 });

const CardDeck: React.FC<{
  onCardClick: (view: string) => void;
  isReturning: boolean;
}> = ({ onCardClick, isReturning }) => {
  const [dealtState, setDealtState] = useState(isReturning);
  const [props, api] = useSprings(cards.length, (i) => from(i));
  const [flipSprings, flipApi] = useSprings(cards.length, () => ({
    rotateY: 180,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  // Deal cards
  useEffect(() => {
    if (!isReturning) {
      const dealTimeout = setTimeout(() => {
        api.start((i) => stacked(i));
      }, 300);

      const flipTimeout = setTimeout(() => {
        setDealtState(true);
        api.start((i) => dealt(i));
      }, 1000);

      return () => {
        clearTimeout(dealTimeout);
        clearTimeout(flipTimeout);
      };
    } else {
      // If returning, don't animate the deal, just show the dealt state
      api.start((i) => dealt(i));
    }
  }, [api, isReturning]);

  // Flip cards
  useEffect(() => {
    if (dealtState && !isReturning) {
      cards.forEach((_, index) => {
        setTimeout(() => {
          flipApi.start((i) => (i === index ? { rotateY: 0 } : {}));
        }, 200 + index * 100);
      });
    }

    if (isReturning) {
      cards.forEach((_, index) => {
        flipApi.start((i) => (i === index ? { rotateY: 0 } : {}));
      });
    }
  }, [dealtState, flipApi, isReturning]);

  return (
    <div className="deck-container">
      <div className="info">
        <span className="name"> ALEX VIRGA </span>
        <span className="sub-info"> Software Engineer </span>
        <span className="sub-info"> Los Angeles </span>
      </div>
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
