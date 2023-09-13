import { Children, useState } from 'react';
import { motion } from 'framer-motion';

function Swiper({ children, initial, animate, transition, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const childrenArray = Children.toArray(children);

  const prev = () => {
    setCurrentIndex((index) => (index === 0 ? childrenArray.length - 1 : index - 1));
  };

  const next = () => {
    setCurrentIndex((index) => (index === childrenArray.length - 1 ? 0 : index + 1));
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        key={currentIndex}
        initial={initial} //initial opacity: 1, x: -20, y: 0
        animate={animate} //animate opacity: 1, x: 0, y: 0
        transition={transition} //transition duration: 0.5
      >
        {childrenArray[currentIndex]}
      </motion.div>
      
      <button onClick={prev} className='absolute left-2 top-1/2 -translate-y-5'>
        <img src='/prev.svg' alt='이전' className='rounded-full' />
      </button>
      <button onClick={next} className='absolute right-2 top-1/2 -translate-y-5'>
        <img src='/next.svg' alt='다음' className='rounded-full' />
      </button>
    </div>
  );
}

export default Swiper;
