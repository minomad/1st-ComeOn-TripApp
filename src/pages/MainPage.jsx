import { usePocketData } from '@/api/usePocketData';
import Category from '@/components/Category';
import Header from '@/components/Header';
import Hotel from '@/components/Hotel';
import HotelList from '@/components/HotelList';
import Spinner from '@/components/Spinner';
import Swiper from '@/components/Swiper';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function MainPage() {
  const { getListData } = usePocketData('hotel');
  const filter = 'category = "강원" || category = "제주" || category = "부산" || category = "광주"';
  const {
    data: hotelData,
    isLoading: isHotelLoading,
    isError,
  } = useQuery(['hotel', { filter }], () => getListData({ filter }));

  const [selectCategory, setSelectCategory] = useState('강원');
  const category = ['강원', '제주', '부산', '광주'];

  if (isHotelLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>서버 에러 발생</div>;
  }

  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header logo='logo' search='search' cart='cart' />
      <section className='pb-24'>
        <h2 className='sr-only'>메인페이지</h2>

        <Swiper
          initial={{ x: -20, y: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className='h-[20rem] sm:h-[25rem] md:h-[29rem]'
        >
          <img src='/ad.png' alt='광고' className='mx-auto sm:h-[25rem] md:h-[29rem]' />
          <img src='/ad2.png' alt='광고' className='mx-auto sm:h-[25rem] md:h-[29rem]' />
          <img src='/ad3.png' alt='광고' className='mx-auto sm:h-[25rem] md:h-[29rem]' />
        </Swiper>

        <ul className='flex items-center justify-center gap-10 py-5 text-center max-[362px]:gap-6'>
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
        <section className='mx-auto max-w-2xl px-4'>
          <HotelList title='야!무지개놀자~!' subtitle='야!무지개놀자~!'>
            <Category
              className='justify-center gap-2 py-3 max-[340px]:text-sm max-[340px]:leading-6 '
              category={category}
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
            />
            <Hotel data={hotelData} selectCategory={selectCategory} />
          </HotelList>
        </section>

        <section className='mx-auto max-w-2xl overflow-hidden px-4'>
          {/* <Swiper
            initial={{ opacity: 1, x: 10, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='flex gap-3'>
              <img src='/1.png' alt='' className='w-40' />
              <img src='/2.png' alt='' className='w-40' />
              <img src='/3.png' alt='' className='w-40' />
            </div>
            <div className='flex gap-3'>
              <img src='/4.png' alt='' className='w-40' />
              <img src='/5.png' alt='' className='w-40' />
              <img src='/6.png' alt='' className='w-40' />
            </div>
          </Swiper> */}
        </section>
      </section>
      <footer></footer>
    </>
  );
}
export default MainPage;
