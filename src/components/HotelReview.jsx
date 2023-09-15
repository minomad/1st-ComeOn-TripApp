import { useRef } from 'react';
import { useState } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import HotelReviewEdit from './HotelReviewEdit';
import useAuthStore from '@/store/useAuthStore';

function HotelReview({ star, hotel, hotelId, reviewData }) {
  const { createData: createReview } = usePocketData('review');
  const { updateData: updateHotel } = usePocketData('hotel');
  const { updateData: updateUser } = usePocketData('users');

  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);

  const [isShow, setIsShow] = useState(false);

  const queryClient = useQueryClient();
  const reviewRef = useRef(null);
  const rating = parseInt(star);
  const userReview = user.nickName;

  const handleShowReview = () => {
    if (reviewData.some((user) => user.nickName === userReview)) {
      return toast.error('이미 작성한 리뷰가 있습니다.');
    }
    setIsShow((prev) => !prev);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const review = reviewRef.current.value;
    const userId = user?.id;

    const reviewData = {
      title: hotel,
      review,
      nickName: user?.nickName,
    };

    if (!review || review.trim() === '') {
      toast.error('리뷰를 작성해주세요');
      return;
    }

    try {
      const created = await createReview(reviewData);
      await updateHotel(hotelId, {
        'review+': created.id,
      });
      updateUser(userId, {
        'review+': created.id,
      });
      toast.success('리뷰가 등록되었습니다.');
      setIsShow(false);
      queryClient.invalidateQueries(['hotel']);
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

      {isAuth && (
        <HotelReviewEdit
          isShow={isShow}
          reviewRef={reviewRef}
          handleSubmitReview={handleSubmitReview}
          handleShowReview={handleShowReview}
        />
      )}

      <AnimatePresence>
        {Array.isArray(reviewData)
          ? reviewData
              .map((item) => (
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5 }}
                  key={item.id}
                  className='mt-5 w-full rounded bg-lightPurple p-4'
                >
                  <div className='flex'>
                    {Array.from({ length: rating }, (_, index) => (
                      <img key={index} src='/star.svg' alt='평점' />
                    ))}
                  </div>
                  <div className='flex items-center gap-3'>
                    <p className='text-lg font-bold '>{item.nickName}</p>
                    <span className='text-sm text-gray'>{item.updated.slice(0, 10)}</span>
                  </div>
                  <p className='line-clamp-3 text-ellipsis'>{item.review}</p>
                </motion.article>
              ))
              .reverse()
          : null}
      </AnimatePresence>
    </section>
  );
}

export default HotelReview;
