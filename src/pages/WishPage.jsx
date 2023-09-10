import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import HotelInfoCategory from '@/components/HotelInfoCategory';

function WishPage() {
  const [selectCategory, setSelectCategory] = useState('숙소');
  const info = ['숙소', '레저'];
  return (
    <>
      <Helmet>
        <title>찜한 목록</title>
      </Helmet>
      <Header back='back' cart='cart' className=' text-xl font-semibold' title='찜한 목록' />
      <section className='px-4'>
        <h3 className='sr-only'>찜한 목록</h3>
        <HotelInfoCategory
          info={info}
          selectCategory={selectCategory}
          handleChangeCategory={setSelectCategory}
          className='text-xl'
        />

        <figure className='flex justify-center pt-20'>
          <img src='/heartActive.svg' alt='하트' className='w-14' />
        </figure>

        {
          <div className='flex flex-col items-center font-semibold text-gray2'>
            <p>로그인 후</p>
            <p>찜목록을 확인해주세요</p>
            <Link
              to='/signin'
              className='my-2 w-full max-w-md rounded bg-primary py-2 text-center text-white'
            >
              로그인
            </Link>
            <Link
              to='/signup'
              className='my-2 w-full max-w-md rounded border py-2 text-center text-black hover:text-primary'
            >
              회원가입
            </Link>
          </div>
        }
        {
          <div className='flex justify-center font-semibold'>
            <Link
              to='/hotel'
              className='my-2 w-full max-w-md rounded border py-2 text-center text-black hover:text-primary'
            >
              숙소 보러가기
            </Link>
          </div>
        }
      </section>
    </>
  );
}
export default WishPage;
