import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import Category from '@/components/Category';
import Hotel from '@/components/Hotel';
import Header from '@/components/Header';
import Spinner from '@/components/Spinner';
import HotelList from '@/components/HotelList';

function MainPage() {
  const { getListData } = usePocketData('hotel');
  const {
    data: hotelData,
    isLoading: isHotelLoading,
    isError,
  } = useQuery(['hotel'], () => getListData());
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
      <section className='pb-20'>
        <h2 className='sr-only'>메인페이지</h2>

        <figure className='flex justify-center'>
          <img src='/ad.png' alt='광고' className='max-h-[25rem] w-full' />
          <figcaption className='sr-only'>야무지개놀자 광고</figcaption>
        </figure>

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
        <section className='px-4'>
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
      </section>
      <footer></footer>
    </>
  );
}
export default MainPage;
