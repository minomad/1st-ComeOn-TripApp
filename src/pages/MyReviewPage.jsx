import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import Header from '@/components/Header';
import Button from '../components/Button';
import Category from '@/components/Category';
import MyPage from './MyPage';

function MyBookingPage() {
  const [isActive, setIsActive] = useState('');

  const handleIsActive = (name) => {
    setIsActive(name);
  };
  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='마이 페이지'>
        메인페이지
      </Header>
      {/* 마이페이로 돌아갈 수 있는 버튼 기능의 이미지 */}
      <section className='mb-10 flex items-center justify-center'>
        <Link to='/mypage'>
          <Button
            type='button'
            onMouseOver={() => handleIsActive('mypage')}
            onMouseLeave={() => handleIsActive('')}
            className={`mt-12  min-h-[90px] min-w-[90px] rounded-full border-2 border-secondary
            bg-gray shadow-md lg:h-[90px] lg:w-[90px] xl:h-[100px] xl:w-[100px] ${
              isActive === 'mypage' ? 'shadow-2xl' : ''
            }`}
          >
            <img src='/' alt='/' />
          </Button>
        </Link>
      </section>
      <section className='flex justify-center '>
        <ul className='box-border h-auto w-2/3 overflow-auto rounded-2xl bg-lightPurple px-7 py-7'>
          <li className='bg-white'>나의 후기</li>

          <Link to=''>
            <li
              onMouseOver={() => handleIsActive('my')}
              onMouseLeave={() => handleIsActive('')}
              className={`overflow-hiden my-4 box-border flex justify-between rounded-2xl bg-white p-2 ${
                isActive === 'my' ? 'border-2 border-primary bg-secondary shadow-md' : ''
              }`}
            >
              <div className='mr-8 flex'>
                <div className='mr-3 h-[120px] w-[120px] rounded-2xl bg-slate-100 sm:h-32 sm:w-32 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-36 xl:w-36'>
                  이미지
                </div>
                <dl className='flex flex-col justify-center gap-6 overflow-auto whitespace-nowrap'>
                  <div className='text-xl font-bold'>
                    <span>지역</span> 아쿠아리움
                  </div>
                  <dt>
                    성인<span className='font-semibold'>2인</span>
                  </dt>
                  <dd>총금액</dd>
                </dl>
              </div>

              <div className='relative'>
                <div className='hidden text-xs sm:contents'>0000.00.00</div>
                <div className='absolute right-0'>화살표</div>
              </div>
            </li>
          </Link>
        </ul>
      </section>
    </>
  );
}
export default MyBookingPage;
