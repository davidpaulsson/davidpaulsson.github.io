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
import useElementSize from '../utils/useElementSize';
import useWindowSize from '../utils/useWindowSize';
import './styles.scss';

const IndexPage = () => {
  const { height } = useWindowSize();
  const [behindRef, { height: behindHeight }] = useElementSize();

  return (
    <>
      <motion.div
        style={{ height: behindHeight + 'px' }}
        className="behind pad"
        {...behindTransition}
      >
        <Input />
      </motion.div>
      <motion.div className="cover" {...coverTransition} />
      <Link className="behind" to="/" title="Go to homepage" />
      <motion.div
        ref={behindRef}
        className="front"
        {...frontTransition({ height })}
      >
        <div className="pad">
          <Output />
        </div>
      </motion.div>
    </>
  );
};

export default IndexPage;
