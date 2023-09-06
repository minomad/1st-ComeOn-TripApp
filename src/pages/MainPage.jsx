import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Category from '@/components/Category';
import Header from '@/components/Header';

function MainPage() {
  const [selectCategory, setSelectCategory] = useState('');
  const category = ['강원', '제주', '부산', '광주'];
  // const icon = '/heartActive.svg';

  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='메인페이지'>
        메인페이지
      </Header>
      <h1 className='sr-only'>메인 페이지</h1>
      <section className='flex flex-col items-center'>
        <ul className='flex items-center justify-center gap-6 text-center sm:gap-10'>
          <li>
            <Link to='/hotel' className='flex flex-col items-center gap-2'>
              <img src='/hotel.svg' alt='호텔 리조트' />
              호텔/리조트
            </Link>
          </li>
          <li>
            <Link to='/' className='flex flex-col items-center gap-2'>
              <img src='/plane.svg' alt='항공' />
              항공
            </Link>
          </li>
          <li>
            <Link to='/' className='flex flex-col items-center gap-2'>
              <img src='/bus.svg' alt='교통' />
              교통
            </Link>
          </li>
          <li>
            <Link to='/leisure' className='flex flex-col items-center gap-2'>
              <img src='/ticket.svg' alt='레저 티켓' />
              레저/티켓
            </Link>
          </li>
        </ul>
        <br />
        <br />
        <br />

        <Category
          className='justify-center gap-5'
          category={category}
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          // icon={icon}
        />
      </section>
      <footer>푸터</footer>
    </>
  );
}
export default MainPage;
