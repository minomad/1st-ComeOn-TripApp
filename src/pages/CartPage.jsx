import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { usePocketData } from '@/api/usePocketData';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { numberWithComma } from '@/utils/numberWithComma';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import useAuthStore from '@/store/useAuthStore';
import Spinner from '@/components/Spinner';
import WishCart from '@/components/WishCart';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Guest from '@/components/Guest';
import HotelInfoCategory from '@/components/HotelInfoCategory';
import WishList from '@/components/WishList';

function CartPage() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);

  const { getIdData, updateData: updateUser } = usePocketData('users');
  const { getListData, deleteData: deleteOrder } = usePocketData('order');

  const [selectCartItem, setSelectCartItem] = useState([]);
  const [selectCategory, setSelectCategory] = useState('숙소');
  const tag = ['숙소', '레저', '교통'];

  const navigate = useNavigate();

  const userId = user?.id;

  const { data, isLoading } = useQuery(
    ['userCart', userId],
    () => getIdData(userId, { expand: 'cartRoom, cartLeisure' }),
    {
      refetchOnWindowFocus: false,
      enabled: !!userId,
    },
  );

  const { data: orderData } = useQuery(['userOrder'], () => getListData());

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
          <Guest />
        </section>
      </>
    );
  }

  const handleDeleteCart = async (itemId) => {
    const category = selectCategory === '숙소' ? 'Room' : 'Leisure';

    await updateUser(userId, {
      [`cart${category}-`]: itemId,
    });

    const filterData = orderData?.filter((orderItem) => orderItem.orderid === itemId);
    if (filterData) {
      for (const orderItem of filterData) {
        await deleteOrder(orderItem.id);
      }
    }

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
    const selectedItems = [...selectCartItem];
    const index = selectedItems.indexOf(itemId);

    if (index === -1) {
      selectedItems.push(itemId);
    } else {
      selectedItems.splice(index, 1);
    }

    setSelectCartItem(selectedItems);
  };

  const cartTotalPrice = () => {
    let totalPrice = 0;

    if (cartRoom) {
      for (const itemId of selectCartItem) {
        const selectedRoom = cartRoom.find((item) => item.id === itemId);
        if (selectedRoom) {
          totalPrice += Number(selectedRoom.price);
        }
      }
    }

    if (cartLeisure) {
      for (const itemId of selectCartItem) {
        const selectedLeisure = cartLeisure.find((item) => item.id === itemId);
        if (selectedLeisure) {
          totalPrice += Number(selectedLeisure.price);
        }
      }
    }

    return totalPrice;
  };

  const totalCartPrice = cartTotalPrice();

  const handleBooked = async () => {
    if (selectCartItem.length === 0) {
      return toast.error('항목을 선택해 주세요');
    }

    const category = selectCategory === '숙소' ? 'Room' : 'Leisure';

    await updateUser(userId, {
      [`booked${category}+`]: selectCartItem,
    });

    for (const itemId of selectCartItem) {
      await updateUser(userId, {
        [`cart${category}-`]: itemId,
      });

      const filterData = orderData?.filter((orderItem) => orderItem.orderid === itemId);
      if (filterData) {
        for (const orderItem of filterData) {
          deleteOrder(orderItem.id);
        }
      }
    }

    toast.success('결제가 완료되었습니다.');
    queryClient.invalidateQueries(['userCart']);
    setTimeout(() => {
      toast.dismiss();
      navigate('/');
    }, 1500);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Helmet>
        <title>장바구니</title>
      </Helmet>
      <Header back='back' search='search' title='장바구니' className='text-xl font-semibold' />
      <section className='mx-auto pb-40'>
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

        {selectCategory === '숙소' && isAuth && !cartRoom && <WishCart cart={true} link='' />}

        {selectCategory === '숙소' && isAuth && cartRoom && (
          <>
            {cartRoom?.map((item) => {
              const filterData = orderData?.filter((orderItem) => orderItem.orderid === item.id);
              return (
                <WishList
                  key={item.id}
                  cart={true}
                  data={[item]}
                  handleDelete={() => handleDeleteCart(item.id)}
                  img='img'
                  filterData={filterData}
                  cartHotel={true}
                  handleCheckbox={() => handleCheckbox(item.id)}
                />
              );
            })}

            <div className='fixed bottom-0 z-[100] flex w-full max-w-3xl flex-col gap-1 border-t-2 border-[#919191] bg-white px-5 py-4 font-bold'>
              <span className='text-end text-[12px] text-[#919191]'>결제 예상금액</span>
              <div className='flex items-center justify-between pb-2'>
                <span className='pl-1'>총</span>
                <span className='text-lg text-primary'>{numberWithComma(totalCartPrice)}원</span>
              </div>
              <Button
                type='submit'
                className='w-full rounded-[4px] border bg-primary px-4 py-2 text-white'
                onClick={handleBooked}
              >
                바로 결제하기
              </Button>
            </div>
          </>
        )}

        {selectCategory === '레저' && isAuth && !cartLeisure && <WishCart cart={true} link='' />}

        {selectCategory === '레저' && isAuth && cartLeisure && (
          <>
            {cartLeisure?.map((item) => {
              const filterData = orderData?.filter((orderItem) => orderItem.orderid === item.id);
              return (
                <WishList
                  key={item.id}
                  cart={true}
                  data={[item]}
                  handleDelete={() => handleDeleteCart(item.id)}
                  filterData={filterData}
                  cartHotel={true}
                  handleCheckbox={() => handleCheckbox(item.id)}
                />
              );
            })}

            <div className='fixed bottom-0 z-[100] flex w-full max-w-3xl flex-col gap-1 border-t-2 border-[#919191] bg-white px-5 py-4 font-bold'>
              <div className='flex items-center justify-between'>
                <span className='pl-1'>총</span>
                <span className='text-lg text-primary'>{numberWithComma(totalCartPrice)}원</span>
              </div>
              <span className='text-end text-[12px] text-[#919191]'>
                결제 단계에서 쿠폰 적용시 추가 할인 가능
              </span>
              <Button
                type='submit'
                className='w-full rounded-[4px] border bg-primary px-4 py-2 text-white'
                onClick={handleBooked}
              >
                바로 결제하기
              </Button>
            </div>
          </>
        )}

        {selectCategory === '교통' && isAuth && !cartRoom && <WishCart cart={true} link='' />}

        <Toaster
          toastOptions={{
            duration: 900,
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
          containerStyle={{
            top: 420,
          }}
        />
      </section>
    </>
  );
}
export default CartPage;
