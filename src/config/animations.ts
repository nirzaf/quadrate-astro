import { type Variants } from 'framer-motion';

export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.6
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const staggerChildrenVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1
    }
  }
};

export const defaultViewport = { once: true, margin: '-100px' };
