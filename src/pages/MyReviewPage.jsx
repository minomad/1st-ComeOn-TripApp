import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { toast, Toaster } from 'react-hot-toast';
import PocketBase from 'pocketbase';
import Header from '@/components/Header';
import MyCircleProfile from '@/components/MyCircleProfile';
import MyList from '@/components/MyList';
import Spinner from '@/components/Spinner';
import useAuthStore from '../store/useAuthStore';

function MyReviewPage() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);
  const { getIdData: getUser } = usePocketData('users');
  const id = user?.id;
  const { data: userData, isLoading } = useQuery(['users', id], () =>
    getUser(id, { expand: 'review' }),
  );

  const reviewData = userData?.expand?.review;

  if (!reviewData || reviewData.length === 0) {
    toast('❌ 작성된 QnA가 없습니다.');
  } else {
    toast.success('QnA 데이터 로드 성공');
  }

  if (isLoading) {
    return <Spinner />;
  }

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
            <div className='font-semibold'>나의 후기 ({reviewData?.length || '0'})</div>
          </li>
          {reviewData?.map((item) => {
            return (
              <MyList
                handler=''
                alt={item.title}
                key={item.id}
                date={item.created.slice(0, 10)}
                title={item.title}
                second={item.review}
                third='별점'
                className2='text-sm line-clamp-2 h-[35px] sm:line-clamp-3 sm:h-[60px] sm:text-sm'
                className3='text-sm font-semibold sm:text-md'
              ></MyList>
            );
          })}
        </ul>
        <Toaster
          toastOptions={{
            duration: 1000,
            success: {
              style: {
                background: '#5D6FFF',
                color: 'white',
              },
            },
            error: {
              style: {
                background: '#E03B69',
                color: 'white',
              },
            },
          }}
        />
      </section>
    </>
  );
}
export default MyReviewPage;
