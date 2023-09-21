import { usePocketData } from '@/api/usePocketData';
import useStore from '@/store/zustand';
import { numberWithComma } from '@/utils/numberWithComma';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function CartController({ userId,id }) {
  const { updateData: updateUser } = usePocketData('users');
  const queryClient = useQueryClient();

  const handleCart = async () => {
    await updateUser(userId, {
      'cartLeisure+': carts.map((obj)=>obj.id),
    });

    toast.success('장바구니에 담겼습니다.');
    queryClient.invalidateQueries(['users'],id);
  };


  // 앱 상태 : carts
  const carts = useStore((state) => state.carts);

  // 파생된 상태 : hasCartItems, totalPrice
  const hasCartItems = carts.length > 0;
  const totalPrice = carts.reduce((total, cart) => {
    return total + (cart.count * cart.price * ((100 - Number(cart.discount)) / 100) ?? 0);
  }, 0);
  
  return hasCartItems ? (
    <div className='flex flex-col fixed bottom-0 z-[100] w-full max-w-3xl bg-white px-5 py-4 border-t-2 border-[#919191] font-bold gap-1'>
      <div className='flex justify-between items-center'>
        <span className='text-[14px]'>총 {carts.length}개</span>
        <span className='text-[18px]'>{numberWithComma(totalPrice)}원</span>
      </div>
      <span className='text-[12px] text-[#919191] text-end'>결제 단계에서 쿠폰 적용시 추가 할인 가능</span>
      <div className='flex justify-between gap-2 font-bold'>
        <button className='py-2 px-4 border w-[50%] border-primary rounded-[4px] text-primary' onClick={handleCart}>장바구니 담기</button>
        <button className='py-2 px-4 border w-[50%] bg-primary text-white rounded-[4px]'>바로 구매하기</button>
      </div>
    </div>
  ) : null;
}

export default CartController;
