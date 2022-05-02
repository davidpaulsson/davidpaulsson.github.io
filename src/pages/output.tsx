import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import Input from '../components/Input';
import Output from '../components/Output';
import {
  behindTransition,
  coverTransition,
  frontTransition,
} from '../utils/transitions';
import useWindowSize from '../utils/useWindowSize';
import './styles.scss';

const IndexPage = () => {
  const { height } = useWindowSize();

  return (
    <>
      <motion.div className="behind pad" {...behindTransition}>
        <Input />
      </motion.div>
      <motion.div className="cover" {...coverTransition} />
      <Link className="behind" to="/" />
      <motion.div className="front" {...frontTransition({ height })}>
        <div className="pad">
          <Output />
        </div>
      </motion.div>
    </>
  );
};

export default IndexPage;
