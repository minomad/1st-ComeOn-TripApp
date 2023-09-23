import { usePocketData } from '@/api/usePocketData';
import useStore from '@/store/zustand';
import { numberWithComma } from '@/utils/numberWithComma';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function CartController({ userId, id, data, productData, user }) {
  const { updateData: updateUser } = usePocketData('users');
  const queryClient = useQueryClient();
  const navigation = useNavigate();
  const carts = useStore((state) => state.carts);

  const handleCart = async () => {
    await updateUser(userId, {
      'cartLeisure+': carts.map((obj) => obj.id),
    });

    toast.success('장바구니에 담겼습니다.');
    queryClient.invalidateQueries(['users'], id);
  };
console.log(carts);
    const handlePayment = () => {
    navigation(`/booking/${data.id}/${carts[0]?.id}/${carts[1]?.id}/${carts[2]?.id}`);
  };
  // const handlePayment = () => {
    // const orderData = {
    //   username: user.username,
    //   leisureTitle: data.title,
    //   leisureId: id,
    //   leisureProductId: carts.map((obj) => obj.id),
    //   price: carts.map((obj) => obj.price),
    // };

    // carts.map((obj) => {
    //   const orderData = {
    //     username: user.username,
    //     leisureTitle: data.title,
    //     leisureId: id,
    //     leisureProductId: obj.id,
    //     price: obj.price,
    //   };
    //   console.log(orderData);
    //   })
    // toast((t) => (
    //   <div className='flex-col items-center gap-5'>
    //     <span className='text-lg'>결제 하시겠습니까?</span>
    //     <div className='flex gap-10 pt-2'>
    //       <Button
    //         type='submit'
    //         className='rounded-lg bg-primary px-5 py-2 text-white'
    //         onClick={async () => {
    //           toast.dismiss(t.id);
    //           const order = await createOrder(orderData);
    //           updateUser(userId, {
    //             'orderLeisure+': order.id,
    //           });
    //           toast.success('결제가 완료되었습니다.');
    //           setTimeout(() => {
    //             toast.dismiss();
    //             navigate('/');
    //           }, 1000);
    //         }}
    //       >
    //         예
    //       </Button>
    //       <Button
    //         type='button'
    //         className='rounded-lg bg-accent px-1 py-2 text-white'
    //         onClick={() => toast.dismiss(t.id)}
    //       >
    //         아니오
    //       </Button>
    //     </div>
    //   </div>
    // ));
  // };

  
  // 앱 상태 : carts

  // 파생된 상태 : hasCartItems, totalPrice
  const hasCartItems = carts.length > 0;
  const totalPrice = carts.reduce((total, cart) => {
    return total + (cart.count * cart.price * ((100 - Number(cart.discount)) / 100) ?? 0);
  }, 0);

  return hasCartItems ? (
    <div className='fixed bottom-0 z-[100] flex w-full max-w-3xl flex-col gap-1 border-t-2 border-[#919191] bg-white px-5 py-4 font-bold'>
      <div className='flex items-center justify-between'>
        <span className='text-[14px]'>총 {carts.length}개</span>
        <span className='text-[18px]'>{numberWithComma(totalPrice)}원</span>
      </div>
      <span className='text-end text-[12px] text-[#919191]'>
        결제 단계에서 쿠폰 적용시 추가 할인 가능
      </span>
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
          바로 구매하기
        </button>
      </div>
    </div>
  ) : null;
}

export default CartController;

