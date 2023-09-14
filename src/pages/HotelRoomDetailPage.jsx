import { useState } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Spinner from '@/components/Spinner';
import Button from '@/components/Button';
import useAuthStore from '@/store/useAuthStore';
import 'swiper/css';
import 'swiper/css/navigation';

function HotelRoomDetailPage() {
  const { id, hotel } = useParams();
  const { getIdData: getRoom } = usePocketData('room');
  const { updateData: updateUser } = usePocketData('users');
  const { data: roomData, isLoading: roomLoading } = useQuery(['room', id], () => getRoom(id));

  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);
  const userId = user.id;

  const queryClient = useQueryClient();

  const navigation = useNavigate();

  const [isShowPayment, setIsShowPayment] = useState(false);

  const handleBookingRoom = () => {
    if (!isAuth) {
      toast(
        (f) => (
          <div className='flex-col items-center gap-5 font-semibold'>
            <div className='text-center text-sm text-accent'>로그인이 필요합니다.</div>
            <div className='text-lg text-primary'>로그인 하시겠습니까?</div>
            <div className='flex justify-between py-2'>
              <Button
                className='rounded-lg bg-primary px-4 py-2 text-white'
                onClick={() => {
                  toast.dismiss(f.id);
                  setTimeout(() => {
                    navigation('/signIn');
                  }, 1000);
                }}
              >
                예
              </Button>
              <Button
                className='rounded-lg bg-accent px-1 py-2 text-white'
                onClick={() => {
                  toast.dismiss();
                }}
              >
                아니오
              </Button>
            </div>
          </div>
        ),
        {
          duration: 2500,
        },
      );
      return;
    }

    if (isAuth) {
      setIsShowPayment(true);
    }
  };

  const handlePayment = () => {
    navigation(`/booking/${roomData.id}/${hotel}`);
  };

  const handleCart = async () => {
    await updateUser(userId, {
      'cartRoom+': id,
    });
    queryClient.invalidateQueries(['users']);

    toast(
      (c) => (
        <div className='flex gap-1 font-semibold'>
          <div className='text-primary'>장바구니에 담겼습니다.</div>
          <Button
            className='text-accent'
            onClick={() => {
              toast.dismiss(c.id);
              setTimeout(() => {
                navigation('/cart');
              }, 1000);
            }}
          >
            장바구니 보기
          </Button>
        </div>
      ),
      {
        duration: 1000,
      },
    );
  };

  const handleClosePayment = () => {
    setIsShowPayment(false);
  };

  if (roomLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Header back='back' cart='cart' title={hotel} className='text-xl font-bold' />
      <section className=' mx-auto max-w-2xl px-4 pb-32'>
        <h3 className='sr-only'>{hotel}</h3>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          a11y={true}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <img src={getPbImageURL(roomData, 'img')} alt={roomData.title} className='mx-auto' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={getPbImageURL(roomData, 'img02')} alt={roomData.title} className='mx-auto' />
          </SwiperSlide>
        </Swiper>

        <p className='py-2 text-lg font-bold' key={roomData.id}>
          {roomData.title}
        </p>
        <span className='rounded bg-slate-100 px-2 py-1 font-semibold text-gray2'>
          {roomData.info}
        </span>
        <div className='mt-1 flex justify-between py-2 font-bold'>
          <span>숙박(15:00~)</span>
          <p className='text-lg text-primary'>{numberWithComma(roomData.price)}원</p>
        </div>
        <div className='flex justify-end border-b-8 border-thirdary pb-4 leading-8'>
          <Button
            className='mt-5 h-8 w-52 rounded bg-primary font-bold text-white max-[420px]:w-32'
            onClick={() => handleBookingRoom()}
          >
            객실 예약하기
          </Button>
        </div>
        <div className='my-5 border-b border-gray pb-4 leading-7'>
          <p className='text-lg font-bold'>기본 정보</p>
          <p className='whitespace-pre-line text-gray3'>{roomData.desc}</p>
        </div>
        <div className='leading-7'>
          <p className='text-lg font-bold'>예약 안내</p>
          <p className='whitespace-pre-line text-gray3'>{roomData.notice}</p>
        </div>
      </section>

      <AnimatePresence>
        {isShowPayment && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className='fixed bottom-0 z-[100] flex w-full max-w-3xl flex-col gap-1 border-t-2 border-[#919191] bg-white px-5 py-4 font-bold'
          >
            <div className='flex justify-end'>
              <Button onClick={handleClosePayment} className='pb-2'>
                <img src='/close.svg' alt='닫기' />
              </Button>
            </div>
            <div className='flex items-center justify-between'>
              <span className='pl-1'>총</span>
              <span className='text-lg text-primary'>{numberWithComma(roomData.price)}원</span>
            </div>
            <span className='text-end text-[12px] text-[#919191]'>
              결제 단계에서 쿠폰 적용시 추가 할인 가능
            </span>
            <div className='flex justify-between gap-2 font-bold'>
              <Button
                className='w-[50%] rounded-[4px] border border-primary px-4 py-2 text-primary'
                onClick={handleCart}
              >
                장바구니 담기
              </Button>
              <Button
                className='w-[50%] rounded-[4px] border bg-primary px-4 py-2 text-white'
                onClick={handlePayment}
              >
                바로 예약하기
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster
        toastOptions={{
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
    </>
  );
}
export default HotelRoomDetailPage;
