import useStore from '@/store/zustand';
import { shape, string } from 'prop-types';
import { useState } from 'react';

function LeisureButton({ item }) {
	// 컴포넌트 상태
  const [count, setCount] = useState(0);

	// 앱 상태에서 함수 가져오기
	// 카운트 증가/감소 함수
  const increaseCartItemCount = useStore((state) => state.increaseCartItemCount);
  const decreaseCartItemCount = useStore((state) => state.decreaseCartItemCount);
	// 카트에 아이템 추가/삭제 함수
  const addCartItem = useStore((state) => state.addCartItem);
  const removeCartItem = useStore((state) => state.removeCartItem);

  const handleCountUp = () => {
		// 컴포넌트 상태 업데이트
    setCount(count + 1);
		// 앱 상태 업데이트
    if (count === 0) {
      addCartItem({ ...item, count: 1 });
    } else {
      increaseCartItemCount(item);
    }
  };

  const handleCountDown = () => {
		// 컴포넌트 상태 업데이트
    setCount(count - 1);
		// 앱 상태 업데이트
    if (count === 1) {
      removeCartItem(item.id);
    } else {
      decreaseCartItemCount({ ...item, count });
    }
  };

  return (
    <div>
      <button
        type='button'
        className='w-[28px] rounded-[50%] border disabled:opacity-20'
        onClick={handleCountDown}
        disabled={count === 0}
      >
        -
      </button>
      <span className='mx-4'>{count}</span>

      <button type='button' className='w-[28px] rounded-[50%] border' onClick={handleCountUp}>
        +
      </button>
    </div>
  );
}

LeisureButton.propTypes = {
  item: shape({
    id: string,
  }),
};

export default LeisureButton;