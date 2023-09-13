import Header from '@/components/Header';
import { useState } from 'react';
import TrafficCategory from '../components/TrafficCategory';
function TrafficTrainPage() {
    const [selectCategory, setSelectCategory] = useState('편도');
    const [isOpen, setOpen] = useState(false);
    const handleIsOpen = () => {
        setOpen((e) => !e);
    };

    console.log(isOpen);
  const category = ['편도', '왕복'];
  return (
    <>
      <Header
        search='search'
        back='back'
        cart='cart'
        className='ml-10 text-xl font-semibold'
        title='기차'
      />
      <section className='px-5'>
        <h2 className='sr-only'>기차 예매 페이지</h2>
        <div className='flex items-start gap-1 rounded-[4px] border border-[#f1b77f] bg-[#fef8f2] p-4'>
          <img src='/leisure-infoOrange.png' alt='안내' className='' />
          <span className='text-[14px] leading-[16px]'>
            [안내] 철도 노조 파업 예고에 따라 9/14(목)~9/18(월) 기차 일부 노선의 중지가 예상됩니다.
            야놀자 공지를 확인해주세요.
          </span>
        </div>
        <div className='mt-4 rounded-[4px] border border-[#e6e6e6] '>
          <TrafficCategory
            className='justify-center pb-3 max-[340px]:text-sm max-[340px]:leading-6 '
            category={category}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />

          <div className='flex justify-around'>
            <div className='inline-flex flex-col items-center justify-center gap-1'>
              <span className='text-[12px] text-[#919191]'>출발역</span>
              <button type='button' className='text-[30px] font-bold' onClick={handleIsOpen}>
                서울
              </button>
            </div>
            <div className='inline-flex flex-col items-center justify-center gap-1'>
              <span className='text-[12px] text-[#919191]'>도착역</span>
              <button type='button' className='text-[30px] font-bold' onClick={handleIsOpen}>
                선택
              </button>
            </div>
          </div>
          <div className='mx-5 my-5 h-[2px] bg-[#e6e6e6]'></div>
          <div className='my-3 flex flex-col px-5 text-[#919191]'>
            <span className='text-[10px]'>가는날</span>
            <span className='text-[16px]'>날짜를 선택해주세요.</span>
            <span className='text-[12px]'>(탑승일 기준 1일 전 예약은 00:00~02:00 가능)</span>
          </div>
          <div className='mx-5 my-3 h-[2px] bg-[#e6e6e6]'></div>
          <div className='my-3 flex flex-col px-5'>
            <span className='text-[10px] text-[#919191]'>인원</span>
            <span>성인 1명</span>
          </div>
          <button type='button' className='py-3 bg-[#cccccc] text-white font-bold w-[100%]'>승차권 조회</button>
              </div>
              {isOpen && (
                <div>메뉴바 열기</div>
              )}
      </section>
    </>
  );
}

export default TrafficTrainPage;
