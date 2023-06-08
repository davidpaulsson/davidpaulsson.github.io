export const frontTransition = ({ height }) => ({
  initial: { y: 0 },
  animate: { y: 180 },
  exit: { y: height + 180 },
  transition: { ease: [0.87, 0, 0.13, 1], duration: 0.6 },
});

export const coverTransition = {
  animate: { opacity: 0.5 },
  transition: { ease: [0.87, 0, 0.13, 1], duration: 0.6 },
  exit: { opacity: 0 },
};
