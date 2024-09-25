export const animationConfig = {
  stack: (i: number) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  }),
  deal: (i: number) => ({
    x: i * 220 - 220,
    y: 0,
    scale: 1,
    rot: 0,
    delay: i * 200,
  }),
  initialPosition: (_i: number) => ({ x: 0, y: -1000, scale: 1.5 }),
  flip: (rotateY: number) => `perspective(1500px) rotateY(${rotateY}deg)`,
};
