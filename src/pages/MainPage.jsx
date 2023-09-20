import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import Category from '@/components/Category';
import Header from '@/components/Header';
import Hotel from '@/components/Hotel';
import HotelList from '@/components/HotelList';
import Spinner from '@/components/Spinner';
import MetaTag from '@/components/MetaTag';
import 'swiper/css';
import 'swiper/css/navigation';

function MainPage() {
  const { getListData } = usePocketData('hotel');
  const filter = 'category = "강원" || category = "제주" || category = "부산" || category = "광주"';
  const {
    data: hotelData,
    isLoading: isHotelLoading,
    isError,
  } = useQuery(['hotelMain', { filter }], () => getListData({ filter }));

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
      <MetaTag title='야무지개놀자' description='메인페이지' />
      <Header logo='logo' search='search' cart='cart' />
      <section>
        <h2 className='sr-only'>메인페이지</h2>
        <Swiper
          className='max-h-[29rem]'
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          a11y={true}
          scrollbar={{ draggable: true }}
          aria-label='광고 슬라이드'
        >
          <SwiperSlide>
            <img src='/ad.png' alt='광고' width='656' height='464' className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/ad2.png' alt='광고' width='656' height='464' className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/ad3.png' alt='광고' width='656' height='464' className='mx-auto' />
          </SwiperSlide>
        </Swiper>
        <ul className='mx-auto mt-4 flex w-full max-w-lg items-center justify-between px-4 py-5 text-center'>
          <li>
            <Link to='/hotel' className='flex flex-col items-center gap-2'>
              <img src='/hotel.svg' alt='호텔 리조트' width='40' height='38' />
              호텔/리조트
            </Link>
          </li>
          <li>
            <Link to='/airline' className='flex flex-col items-center gap-2'>
              <img src='/plane.svg' alt='항공' width='40' height='38' />
              항공
            </Link>
          </li>
          <li>
            <Link to='/traffic' className='flex flex-col items-center gap-2'>
              <img src='/bus.svg' alt='교통' width='40' height='38' />
              교통
            </Link>
          </li>
          <li>
            <Link to='/leisure' className='flex flex-col items-center gap-2'>
              <img src='/ticket.svg' alt='레저 티켓' width='40' height='38' />
              레저/티켓
            </Link>
          </li>
        </ul>

        <section className='mx-auto mt-3 max-w-2xl px-4'>
          <HotelList title='야!무지개놀자~!' subtitle='재밌게'>
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

      <section className='mx-auto mb-10 max-w-2xl py-12'>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={5}
          navigation
          loop={true}
          a11y={true}
          scrollbar={{ draggable: true }}
          aria-label='광고 슬라이드'
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 3,
            },
            610: {
              slidesPerView: 3,
            },
            611: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <Link to='hotel/m4urk47aq525vh7'>
              <img
                src='/sale.webp'
                alt='광고'
                width='151'
                height='202'
                className='mx-auto rounded-sm'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='location/도쿄'>
              <img
                src='/sale2.webp'
                alt='광고'
                width='151'
                height='202'
                className='mx-auto rounded-sm'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='hotel/z52wykesuxft1mp'>
              <img
                src='/sale3.webp'
                alt='광고'
                width='151'
                height='202'
                className='mx-auto rounded-sm'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='leisurebrand/롯데월드'>
              <img
                src='/sale4.webp'
                alt='광고'
                width='151'
                height='202'
                className='mx-auto rounded-sm'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='leisurebrand/에버랜드'>
              <img
                src='/sale5.webp'
                alt='광고'
                width='151'
                height='202'
                className='mx-auto rounded-sm'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='location/싱가포르'>
              <img
                src='/sale6.webp'
                alt='광고'
                width='151'
                height='202'
                className='mx-auto rounded-sm'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='hotel/dzhawq266mfn76v'>
              <img
                src='/sale7.webp'
                alt='광고'
                width='151'
                height='202'
                className='mx-auto rounded-sm'
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to='hotel/xikeqxqtyx1wp1c'>
              <img
                src='/sale8.webp'
                alt='광고'
                width='151'
                height='202'
                className='mx-auto rounded-sm'
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>
      <footer className='textb mx-auto max-w-2xl bg-slate-50 p-4 pb-20 text-gray3'>
        <div className='flex items-center gap-1'>
          <img src='/logo.svg' alt='로고' />
          <p>(주)야무지개놀자</p>
        </div>
        <div className='flex flex-col'>
          <p>대표 : 강경민, 김종윤, 신명화, 장효윤</p>
          <p>메일 : help@yamoossam.com</p>
          <p>주소 : 서울특별시 강남구 테헤란로108길 42 </p>
          <p>고객센터 : 1234-1234 (9시 - 3시)</p>
          <p>&copy; 2023 (주) 야무지개놀자 모든 권리 보유</p>
        </div>
      </footer>
    </>
  );
}
export default MainPage;
