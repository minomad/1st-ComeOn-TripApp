import { useState } from 'react';

function LeisureButton() {
    const [count, setCount] = useState(0);
    
    const handleCountUp = () => {
      setCount(count + 1);
    };

    const handleCountDown = () => {
      setCount(count - 1);
    };

  return (
    <div>
      <button
        type='button'
        className='w-[28px] rounded-[50%] border disabled:opacity-20'
        onClick={handleCountDown}
        disabled={count === 0}
      >
        -
      </button>
      <span className='mx-4'>{count}</span>
      
      <button type='button' className='w-[28px] rounded-[50%] border' onClick={handleCountUp}>
        +
      </button>
      
    </div>
  );
}

export default LeisureButton;
