import { useState } from 'react';
import { Link } from 'react-router-dom';

function MyList({
  src,
  alt,
  title,
  second,
  third,
  date,
  handler,
  className2,
  className3,
  ...restProps
}) {
  const [isActive, setIsActive] = useState('');

  const handleIsActive = (name) => {
    setIsActive(name);
  };

  return (
    <Link to=''>
      <li
        className='min-h-170 relative my-4 box-border rounded-2xl bg-white p-2 hover:m-[-2px] hover:my-[18px] hover:border-[1px] hover:border-primary hover:shadow-md '
        {...restProps}
        onMouseOver={() => handleIsActive({ handler })}
        onMouseLeave={() => handleIsActive('')}
      >
        <div className='mb-1 h-3 text-right text-xs'>{date}</div>
        <div className='flex overflow-hidden sm:mr-8'>
          <div className='mr-3 aspect-square  h-20  w-20 flex-shrink-0 overflow-hidden rounded-2xl  bg-slate-100 sm:h-32 sm:w-32 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-36 xl:w-36'>
            <img src={src} alt={alt} className=' aspect-square h-full w-full' />
          </div>
          <ul className='flex flex-col justify-between gap-0 overflow-hidden text-ellipsis sm:py-3'>
            <li className='text-md overflow-hidden text-ellipsis whitespace-nowrap font-bold sm:text-lg'>
              {title}
            </li>
            <li className={`touch-none overflow-auto text-ellipsis break-words  ${className2} `}>
              {second}
            </li>
            <li className={`overflow-hidden overflow-ellipsis whitespace-nowrap ${className3}`}>
              {third}
            </li>
          </ul>
          <div className='text-right sm:mt-10 lg:mt-12'>
            <img
              src='/myBlueArrow.svg'
              className={`w-3 opacity-0 
            ${isActive ? 'sm:absolute sm:right-2 sm:w-5 sm:opacity-100' : ''}`}
              alt=''
            />
          </div>
        </div>
      </li>
    </Link>
  );
}
export default MyList;
