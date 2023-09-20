import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import MyCircleProfile from '@/components/MyCircleProfile';
import MyList from '@/components/MyList';

function MyBookingPage() {
  const [isActive, setIsActive] = useState('');

  const handleIsActive = (name) => {
    setIsActive(name);
  };
  return (
    <>
      <Helmet>
        <title>나의 예약</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='나의 예약'>
        나의 예약
      </Header>
      {/* 마이페이로 돌아갈 수 있는 버튼 기능의 이미지 */}
      <MyCircleProfile towhere='/mypage' imgpath='/ad.png' imgalt='프로필사진'></MyCircleProfile>

      <section className='flex justify-center pb-20'>
        <ul className='box-border h-auto w-2/3 rounded-2xl bg-lightPurple px-3 pt-4 text-sm'>
          <li className=' flex flex-row items-center justify-between pb-3   text-primary'>
            <div className='font-semibold'>예약 내역</div>
          </li>
          <MyList
            handler=''
            title='서울 캐러비안베이'
            second='성인 2인'
            third='총금액 '
            className2='text-md font-semibold h-[20px] sm:h-[30px] sm:text-md'
            className3='text-md sm:text-md'
          ></MyList>
        </ul>
      </section>
    </>
  );
}
export default MyBookingPage;
