import { useRef } from 'react';
import { useState } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useQueryClient } from '@tanstack/react-query';
import { Toaster, toast } from 'react-hot-toast';
import HotelReviewEdit from './HotelReviewEdit';

function HotelReview({ star, hotel, hotelId, reviewData }) {
  const { createData } = usePocketData('review');
  const { updateData } = usePocketData('hotel');
  const [isShow, setIsShow] = useState(false);
  const queryClient = useQueryClient();
  const reviewRef = useRef(null);
  const rating = parseInt(star);

  const handleShowReview = () => {
    setIsShow((prev) => !prev);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const review = reviewRef.current.value;

    if (!review || review.trim() === '') {
      toast.error('리뷰를 작성해주세요');
      return;
    }

    const reviewData = {
      hotel,
      username: '인증',
      nickName: '익명',
      review,
    };

    try {
      const createdData = await createData(reviewData);
      await updateData(hotelId, {
        'review+': createdData.id,
      });
      queryClient.invalidateQueries(['hotel']);
      toast.success('리뷰가 등록되었습니다.');
      setIsShow(false);
    } catch (error) {
      toast.error('서버 요청 에러');
    }
  };

  return (
    <section className='mx-auto max-w-xl px-4 pb-40 pt-5 font-semibold'>
      <h3 className='text-xl'>후기</h3>
      <div className='flex items-end pb-8 pt-2'>
        <img src='/star.svg' alt='평점' className='mr-2 w-8' />
        <span className='text-3xl'>{star}</span>
        <span className='text-gray'>/5</span>
      </div>
      <HotelReviewEdit
        isShow={isShow}
        reviewRef={reviewRef}
        handleReviewSubmit={handleReviewSubmit}
        handleShowReview={handleShowReview}
      />

      <Toaster />

      {Array.isArray(reviewData)
        ? reviewData
            .map((item) => (
              <article key={item.id} className='mt-5 w-full rounded bg-lightPurple p-4'>
                <div className='flex'>
                  {Array.from({ length: rating }, (_, index) => (
                    <img key={index} src='/star.svg' alt='평점' />
                  ))}
                </div>
                <div className='flex items-center gap-3 '>
                  <p className='text-lg font-bold '>{item.nickName}</p>
                  <span className='text-sm text-gray'>{item.updated.slice(0, 10)}</span>
                </div>
                <p className='line-clamp-3 text-ellipsis'>{item.review}</p>
              </article>
            ))
            .reverse()
        : null}
    </section>
  );
}

export default HotelReview;
