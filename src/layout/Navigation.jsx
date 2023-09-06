import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
  const [isActive, setIsActive] = useState('');

  const handleIsActive = (name) => {
    setIsActive(name);
  };

  return (
    <nav className='fixed bottom-0 z-50 flex h-14 w-full max-w-3xl justify-center bg-navColor'>
      <ul className='flex items-center gap-8 text-center'>
        <li>
          <NavLink to='/location' onClick={() => handleIsActive('location')}>
            {isActive === 'location' ? (
              <img src='/locationActive.svg' alt='지역' />
            ) : (
              <img src='/location.svg' alt='지역' />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to='/around' onClick={() => handleIsActive('around')}>
            {isActive === 'around' ? (
              <img src='/aroundActive.svg' alt='내주변' />
            ) : (
              <img src='/around.svg' alt='내주변' />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => handleIsActive('home')}
            className='mb-8 flex rounded-full bg-primary p-3 shadow-md'
          >
            <img src='/logoHome.svg' alt='홈' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/wish' onClick={() => handleIsActive('heart')}>
            {isActive === 'heart' ? (
              <img src='/heartActive.svg' alt='찜목록' />
            ) : (
              <img src='/heart.svg' alt='찜목록' />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to='/mypage' onClick={() => handleIsActive('my')}>
            {isActive === 'my' ? (
              <img src='/myActive.svg' alt='마이페이지' />
            ) : (
              <img src='/my.svg' alt='마이페이지' />
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
