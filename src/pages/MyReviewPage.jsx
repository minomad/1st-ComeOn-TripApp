import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils/getPbImageURL';
import PocketBase from 'pocketbase';
import Header from '@/components/Header';
import MyCircleProfile from '@/components/MyCircleProfile';
import MyList from '@/components/MyList';
import Spinner from '@/components/Spinner';

function MyReviewPage() {
  const { id } = useParams();
  // const [selectReview, setSelectReview] = useState('');
  const { getIdData: getReview } = usePocketData('review');

  const option = {
    expand: 'hotel, review, created',
  };

  const { data: reviewData, isLoading: isReviewLoading } = useQuery(['review', id], () => {
    getReview(id, option);
  });

  const hotelData = reviewData?.expand?.hotel;
  const contextData = reviewData?.expand?.review;
  const createdData = reviewData?.expand?.created;

  // console.log(reviewData);

  // if (isReviewLoading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='마이 페이지'>
        나의 리뷰
      </Header>
      {/* 마이페이로 돌아갈 수 있는 버튼 기능의 이미지 */}
      <MyCircleProfile towhere='/mypage' imgpath='/ad.png' imgalt='프로필사진'></MyCircleProfile>

      <section className='flex justify-center'>
        <ul className='box-border h-auto w-2/3 rounded-2xl bg-lightPurple px-3 pb-1 pt-4 text-sm'>
          <li className=' flex flex-row items-center justify-between  text-primary'>
            <div className='font-semibold'>나의 후기</div>
          </li>
          <MyList
            handler=''
            title='ok'
            second='ssddddddddddddddddsadasdasdsadsadsadsadsadasdasdasdasdasdasdasdasdsadsadsadsdsadsadsadasdasdasdasdasdsadsadsadsadasdasdasdasdsaddsadasdasdsadasdasd'
            third='별점'
            className2='text-sm line-clamp-2 h-[35px] sm:line-clamp-3 sm:h-[60px] sm:text-sm'
            className3='text-sm font-semibold sm:text-md'
          ></MyList>
        </ul>
      </section>
    </>
  );
}
export default MyReviewPage;
