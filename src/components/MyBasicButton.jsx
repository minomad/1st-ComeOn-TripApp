import { useState } from 'react';
import { Link } from 'react-router-dom';

function MyBasicButton({ towhere, type, handler, onClick, children, ...restProps }) {
  const [isActive, setIsActive] = useState('');
  const handleIsActive = (name) => {
    setIsActive(name);
  };
  return (
    <Link to={towhere}>
      <button
        type={type}
        aria-label={children}
        className={`mb-2 h-9 w-52 rounded-full border-[1px] border-primary text-sm font-semibold text-primary shadow-md hover:bg-primary hover:font-bold hover:text-white md:h-11 md:w-60 md:text-base`}
        onClick={onClick}
        {...restProps}
      >
        {children}
      </button>
    </Link>
  );
}

export default MyBasicButton;
