import { m } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import Input from '../components/Input';
import Output from '../components/Output';
import { coverTransition, frontTransition } from '../utils/transitions';
import useElementSize from '../utils/useElementSize';
import useWindowSize from '../utils/useWindowSize';
import './styles.scss';

const OutputPage = () => {
  const { height } = useWindowSize();
  const [behindRef, { height: behindHeight }] = useElementSize();

  return (
    <>
      <div style={{ height: behindHeight + 'px' }} className="behind pad">
        <Input />
      </div>
      <m.div className="cover" {...coverTransition} />
      <Link className="behind" to="/" title="Go to homepage" />
      <m.div ref={behindRef} className="front" {...frontTransition({ height })}>
        <div className="pad">
          <Output />
        </div>
      </m.div>
    </>
  );
};

export default OutputPage;
