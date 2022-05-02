export const behindTransition = {
  initial: { scale: 0.95 },
  animate: { scale: 1 },
  transition: { ease: [0.87, 0, 0.13, 1], duration: 0.6 },
};

export const frontTransition = ({ height }) => ({
  initial: { y: -180 },
  animate: { y: 0 },
  exit: { y: height - 180 },
  transition: { ease: [0.87, 0, 0.13, 1], duration: 0.6 },
});

export const coverTransition = {
  animate: { opacity: 0.1 },
  transition: { ease: [0.87, 0, 0.13, 1], duration: 0.6 },
  exit: { opacity: 0 },
};
