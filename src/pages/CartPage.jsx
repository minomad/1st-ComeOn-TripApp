import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { usePocketData } from '@/api/usePocketData';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { numberWithComma } from '@/utils/numberWithComma';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import useAuthStore from '@/store/useAuthStore';
import Spinner from '@/components/Spinner';
import WishList from '@/components/WishList';
import Input from '@/components/Input';
import Button from '@/components/Button';
import HotelInfoCategory from '@/components/HotelInfoCategory';

function CartPage() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);

  const { getIdData, updateData: updateUser } = usePocketData('users');

  const [selectCartItem, setSelectCartItem] = useState([]);
  const [selectCategory, setSelectCategory] = useState('숙소');
  const tag = ['숙소', '레저', '교통'];

  const navigate = useNavigate();

  const id = user?.id;

  const { data, isLoading } = useQuery(
    ['userCart', id],
    () => getIdData(id, { expand: 'cartRoom, cartLeisure' }),
    {
      refetchOnWindowFocus: false,
      enabled: !!id,
    },
  );

  const queryClient = useQueryClient();

  const cartRoom = data?.expand?.cartRoom;
  const cartLeisure = data?.expand?.cartLeisure;

  if (!isAuth) {
    return (
      <>
        <Header back='back' search='search' title='장바구니' className='text-xl font-semibold' />
        <section className='px-4'>
          <h3 className='sr-only'>장바구니</h3>
          <HotelInfoCategory
            info={tag}
            selectCategory={selectCategory}
            handleChangeCategory={setSelectCategory}
            className='text-xl'
          />
          <div className='text-gray-600 flex flex-col items-center pt-20 font-semibold'>
            <p>로그인 후 장바구니를 확인해주세요.</p>
            <Link
              to='/signin'
              className='my-2 w-full max-w-sm rounded bg-primary py-2 text-center text-white'
            >
              로그인
            </Link>
            <Link
              to='/signup'
              className='my-2 w-full max-w-sm rounded border py-2 text-center text-black hover:text-primary'
            >
              회원가입
            </Link>
          </div>
        </section>
      </>
    );
  }

  const handleDeleteRoom = async (itemId) => {
    await updateUser(id, {
      'cartRoom-': itemId,
    });
    toast.error('장바구니에서 삭제하였습니다.');
    queryClient.invalidateQueries(['userCart']);
  };

  const handleDeleteLeisure = async (itemId) => {
    await updateUser(id, {
      'cartLeisure-': itemId,
    });
    toast.error('장바구니에서 삭제하였습니다.');
    queryClient.invalidateQueries(['userCart']);
  };

  const handleAllAgree = () => {
    const checkbox = document.querySelectorAll('.checkbox');
    const allChecked = checkbox[0].checked;
    const selectedId = [];

    checkbox.forEach((checkbox) => {
      if (checkbox.id !== 'all') {
        checkbox.checked = allChecked;
        if (allChecked) {
          selectedId.push(checkbox.id);
        }
      }
    });
    setSelectCartItem(selectedId);
  };

  const handleCheckbox = (itemId) => {
    const seletedItem = [...selectCartItem];
    const index = seletedItem.indexOf(itemId);

    if (index === -1) {
      seletedItem.push(itemId);
    } else {
      seletedItem.splice(index, 1);
    }

    setSelectCartItem(seletedItem);
  };

  const cartTotalPrice = () => {
    let totalPrice = 0;
    for (const itemId of selectCartItem) {
      const selectedRoom = cartRoom.find((item) => item.id === itemId);
      const selectedLeisure = cartLeisure.find((item) => item.id === itemId);

      if (selectedRoom) {
        totalPrice += Number(selectedRoom.price);
      }

      if (selectedLeisure) {
        totalPrice += Number(selectedLeisure.price);
      }
    }
    return totalPrice;
  };

  const totalCartPrice = cartTotalPrice();

  const handleBookedRoom = async () => {
    toast.success('예약이 완료되었습니다.');
    await updateUser(id, {
      'bookedRoom+': selectCartItem,
    });
    await updateUser(id, {
      'cartRoom-': selectCartItem,
    });
    toast.dismiss();
    navigate('/');
    queryClient.invalidateQueries(['userCart']);
  };

  const handleBookedLeisure = async () => {
    toast.success('예약이 완료되었습니다.');
    await updateUser(id, {
      'bookedLeisure+': selectCartItem,
    });
    await updateUser(id, {
      'cartLeisure-': selectCartItem,
    });
    toast.dismiss();
    navigate('/');
    queryClient.invalidateQueries(['userCart']);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>야무지개놀자 장바구니</title>
      </Helmet>
      <Header back='back' search='search' title='장바구니' className='text-xl font-semibold' />
      <section className='mx-auto pb-24'>
        <h3 className='sr-only'>장바구니</h3>
        <HotelInfoCategory
          info={tag}
          selectCategory={selectCategory}
          handleChangeCategory={setSelectCategory}
          className='text-xl'
        />
        <div className='mx-auto flex max-w-[39rem] justify-between gap-2 border-b border-gray p-5 font-semibold'>
          <div className='flex items-center gap-2'>
            <Input
              type='checkbox'
              id='all'
              label='전체 선택'
              className='checkbox h-5 w-5'
              labelClass='cursor-pointer text-lg font-semibold '
              onClick={handleAllAgree}
            />
          </div>
        </div>

        {selectCategory === '숙소' && isAuth && !cartRoom && (
          <>
            <WishList cart='cart' link='' />
          </>
        )}

        {selectCategory === '숙소' && isAuth && cartRoom && (
          <>
            {cartRoom?.map((item) => (
              <article
                key={item.id}
                className='relative mx-auto mt-3 flex w-full max-w-[39rem] gap-3 p-5'
              >
                <Input
                  type='checkbox'
                  id={item.id}
                  label='숙소선택'
                  className='checkbox h-5 w-5'
                  labelClass='sr-only'
                  onClick={() => handleCheckbox(item.id)}
                />
                <figure>
                  <img
                    src={getPbImageURL(item, 'img')}
                    alt={item.title}
                    className='h-full w-[100px] min-[375px]:h-[120px] min-[375px]:w-[120px]'
                  />
                  <figcaption className='sr-only'>{item.title}</figcaption>
                </figure>
                <Button className='absolute right-5 cursor-pointer max-[375px]:top-0'>
                  <img
                    src='/close.svg'
                    alt='닫기'
                    className='h-5 w-5'
                    onClick={() => handleDeleteRoom(item.id)}
                  />
                </Button>
                <div className='flex flex-col min-[375px]:pb-2'>
                  <h2 className='font-bold min-[375px]:text-lg'>{item.title}</h2>
                  <span className='text-sm'>체크인 15:00</span>
                  <span className='text-sm'>체크아웃 11:00</span>
                  <span className='text-sm'>{item.info}</span>
                  <div className='font-bold text-primary min-[400px]:text-[1.2rem]'>
                    <p className='absolute right-5'>{numberWithComma(item.price)}원</p>
                  </div>
                </div>
              </article>
            ))}
            <div className='fixed bottom-0 z-[100] flex w-full max-w-3xl flex-col gap-1 border-t-2 border-[#919191] bg-white px-5 py-4 font-bold'>
              <div className='flex items-center justify-between'>
                <span className='pl-1'>총</span>
                <span className='text-lg text-primary'>{numberWithComma(totalCartPrice)}원</span>
              </div>
              <span className='text-end text-[12px] text-[#919191]'>
                결제 단계에서 쿠폰 적용시 추가 할인 가능
              </span>
              <Button
                className='w-full rounded-[4px] border bg-primary px-4 py-2 text-white'
                onClick={handleBookedRoom}
              >
                바로 예약하기
              </Button>
            </div>
          </>
        )}

        {selectCategory === '레저' && isAuth && !cartLeisure && (
          <>
            <WishList cart='cart' link='' />
          </>
        )}

        {selectCategory === '레저' && isAuth && cartLeisure && (
          <>
            {cartLeisure?.map((item) => (
              <article
                key={item.id}
                className='relative mx-auto mt-3 flex w-full max-w-[39rem] gap-3 p-5'
              >
                <Input
                  type='checkbox'
                  id={item.id}
                  label='숙소선택'
                  className='checkbox h-5 w-5'
                  labelClass='sr-only'
                  onClick={() => handleCheckbox(item.id)}
                />
                <Button className='absolute right-5 cursor-pointer'>
                  <img
                    src='/close.svg'
                    alt='닫기'
                    className='h-5 w-5'
                    onClick={() => handleDeleteLeisure(item.id)}
                  />
                </Button>
                <div className='flex flex-col min-[375px]:pb-2'>
                  <h2 className='font-bold min-[375px]:text-lg'>{item.title}</h2>
                  <span className='text-sm'>{item.info}</span>
                  <div className='font-bold text-primary min-[400px]:text-[1.2rem]'>
                    <p className='absolute right-5'>{numberWithComma(item.price)}원</p>
                  </div>
                </div>
              </article>
            ))}

            <div className='fixed bottom-0 z-[100] flex w-full max-w-3xl flex-col gap-1 border-t-2 border-[#919191] bg-white px-5 py-4 font-bold'>
              <div className='flex items-center justify-between'>
                <span className='pl-1'>총</span>
                <span className='text-lg text-primary'>{numberWithComma(totalCartPrice)}원</span>
              </div>
              <span className='text-end text-[12px] text-[#919191]'>
                결제 단계에서 쿠폰 적용시 추가 할인 가능
              </span>
              <Button
                className='w-full rounded-[4px] border bg-primary px-4 py-2 text-white'
                onClick={handleBookedLeisure}
              >
                바로 결제하기
              </Button>
            </div>
          </>
        )}
        

        {selectCategory === '교통' && isAuth && !cartRoom && (
          <>
            <WishList cart='cart' link='' />
          </>
        )}

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
export default CartPage;
