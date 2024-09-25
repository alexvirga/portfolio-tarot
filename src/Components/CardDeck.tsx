import { useState, useEffect } from "react";
import { useSprings } from "@react-spring/web";
import { Card } from "./Card";
import { animationConfig } from "./animations";
import aboutImage from "../assets/aboutme.png";
import experienceImage from "../assets/experience.png";
import projectImage from "../assets/projects.jpg";
import "./styles.css";

const cards = [aboutImage, experienceImage, projectImage];

const CardDeck = ({ onCardClick }: { onCardClick: (view: string) => void }) => {
  const [dealtState, setDealtState] = useState(false);
  const [props, api] = useSprings(cards.length, (i) =>
    animationConfig.initialPosition(i)
  );
  const [flipSprings, flipApi] = useSprings(cards.length, () => ({
    rotateY: 180,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  useEffect(() => {
    const stackDelay = setTimeout(
      () => api.start((i) => animationConfig.stack(i)),
      500
    );
    const dealDelay = setTimeout(() => {
      setDealtState(true);
      api.start((i) => animationConfig.deal(i));
    }, 1200);

    return () => {
      clearTimeout(stackDelay);
      clearTimeout(dealDelay);
    };
  }, [api]);

  useEffect(() => {
    if (dealtState) {
      cards.forEach((_, index) => {
        setTimeout(
          () => flipApi.start((i) => (i === index ? { rotateY: 0 } : {})),
          200 + index * 100
        );
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
          frontImage={cards[i]}
          onClick={() =>
            onCardClick(i === 0 ? "About" : i === 1 ? "Experience" : "Projects")
          }
        />
      ))}
    </div>
  );
};

export default CardDeck;
