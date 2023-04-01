import { AnimationControls, motion, Variants } from 'framer-motion'
import React from 'react';
import { defaultTransition } from '../utils/transition';

type Props = {
  title: string,
  loaderControls: AnimationControls
};

const variants: Variants = {
  initial: {
    y: 50,
    opacity: 0
  },

  animate: {
    y: 0,
    opacity: 1
  }
}


const Loader = ({ title, loaderControls }: Props) => {
  return (
    <motion.section 
      animate={loaderControls}
      className="
        fixed left-0 top-0 right-0
        bg-secondary text-black z-50
        uppercase flex items-center
        font-bold justify-center 
        text-3xl sm:text-4xl lg:text-6xl 
        xl:text-8xl pointer-events-none
      "
    >
      <motion.h1 
        variants={variants}
        initial={"initial"}
        animate={"animate"}
        transition={defaultTransition}
      >
        {title}
      </motion.h1>
    </motion.section>
  )
}

export default Loader