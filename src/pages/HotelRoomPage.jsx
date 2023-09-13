import { numberWithComma } from '@/utils/numberWithComma';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import useAuthStore from '@/store/useAuthStore';
import Button from '@/components/Button';

function HotelRoomPage({ data, title }) {
  const isAuth = useAuthStore((state) => state.isAuth);

  const navigation = useNavigate();

  const [isShowPayment, setIsShowPayment] = useState(false);

  const [selectRoom, setSelectRoom] = useState(null);

  const handleBookingRoom = (item) => {
    if (!isAuth) {
      toast(
        (f) => (
          <div className='flex-col items-center gap-5 font-semibold'>
            <div className='text-center'>로그인이 필요합니다.</div>
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
                  toast.dismiss(f.id);
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
      setSelectRoom(item);
    }
  };

  const handlePayment = () => {
    if (selectRoom) {
      navigation(`/booking/${selectRoom.id}/${title}`);
    }
  };

  const handleCart = () => {
    navigation('/cart');
  };

  const handleClosePayment = () => {
    setIsShowPayment(false);
  };

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <section className='flex flex-col items-center px-4 pb-32'>
      <h3 className='sr-only'>객실 정보</h3>
      {data.map((item) => (
        <div key={item.id} className='py-5 font-bold'>
          <div>
            <img src={getPbImageURL(item, 'img')} alt={item.title} className='w-full max-w-xl' />
          </div>
          <p className='py-2 text-lg' key={item.id}>
            {item.title}
          </p>
          <span className='rounded bg-slate-100 px-2 py-1 font-semibold text-gray2'>
            {item.info}
          </span>
          <div className='mt-1 flex justify-between py-2'>
            <span>숙박(15:00~)</span>
            <p className='text-lg text-primary'>{numberWithComma(item.price)}원</p>
          </div>
          <div className='flex justify-end'>
            <Button
              className='mt-5 h-8 w-52 rounded bg-primary text-white max-[420px]:w-32'
              onClick={() => handleBookingRoom(item)}
            >
              객실 예약하기
            </Button>
          </div>
        </div>
      ))}

      {isShowPayment && selectRoom && (
        <div className='fixed bottom-0 z-[100] flex w-full max-w-3xl flex-col gap-1 border-t-2 border-[#919191] bg-white px-5 py-4 font-bold'>
          <div className='flex justify-end'>
            <button onClick={handleClosePayment} className='pb-2'>
              <img src='/close.svg' alt='닫기' />
            </button>
          </div>
          <div className='flex justify-between gap-2 font-bold'>
            <button
              className='w-[50%] rounded-[4px] border border-primary px-4 py-2 text-primary'
              onClick={handleCart}
            >
              장바구니 담기
            </button>
            <button
              className='w-[50%] rounded-[4px] border bg-primary px-4 py-2 text-white'
              onClick={handlePayment}
            >
              바로 예약하기
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default HotelRoomPage;
