import { useRef } from 'react';
import { useState } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import HotelReviewEdit from './HotelReviewEdit';
import useStorage from '@/Hook/useStorage';

function MyNewQna({ star, hotel, hotelId, reviewData }) {
  const { createData: createQna } = usePocketData('qna');
  const { updateData: updateQna } = usePocketData('qna');
  const { updateData: updateUser } = usePocketData('users');
  const { storageData: authUser } = useStorage('pocketbase_auth');

  const [isShow, setIsShow] = useState(false);

  const queryClient = useQueryClient();
  const formRef = useRef(null);
  const photoRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const textValue = textRef.current.value;
    const photoValue = photoRef.current.files;

    if (!titleValue && !textValue) {
      toast('제목, 내용 입력이 필요합니다.', {
        icon: '🚨',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });

      return;
    }

    const formData = new FormData();

    formData.append('title', titleValue);
    formData.append('text', textValue);

    if (photoValue) {
      formData.append('img', photoValue[0]);
    }

    const qnaData = {
      title,
      email,
      text,
    };

    try {
      const created = await createQna(qnaData);
      await updateQna(hotelId, {
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

      {authUser && (
        <HotelReviewEdit
          isShow={isShow}
          reviewRef={reviewRef}
          handleReviewSubmit={handleReviewSubmit}
          handleShowReview={handleShowReview}
        />
      )}

      {Array.isArray(reviewData)
        ? reviewData
            .map((item) => (
              <article key={item.id} className='mt-5 w-full rounded bg-lightPurple p-4'>
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
              </article>
            ))
            .reverse()
        : null}
    </section>
  );
}

export default MyNewQna;
