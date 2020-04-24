import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import Input from '../components/input';
import Output from '../components/output';
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
        <Output />
      </motion.div>
      <motion.div className="cover" {...coverTransition} />
      <Link className="behind" to="/output" />
      <motion.div className="front" {...frontTransition({ height })}>
        <div className="pad">
          <Input />
        </div>
      </motion.div>
    </>
  );
};

export default IndexPage;
