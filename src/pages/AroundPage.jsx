import { useState } from 'react';
import { useRef } from 'react';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
/* import { numberWithComma } from '@/utils/numberWithComma'; */
import { getPbImageURL } from '@/utils/getPbImageURL';
import Input from '@/components/Input'
import Category from '@/components/Category';
import Button from '@/components/Button';
import AroundMap from '@/components/AroundMap';
import AroundList from '@/components/AroundList';

function AroundPage() {
  const [selectCategory, setSelectCategory] = useState('숙소');
  const [isCheck, setCheck] = useState(false);
  const aroundSearch = useRef();
  const category = ['숙소', '레저/티켓'];

  const { getListData } = usePocketData('hotel');
  const { data } = useQuery(['hotel'], () => getListData());
  console.log(data?.[0]);
  const data1 = data?.[17];
  console.log(data1);

  const title = data1?.title;
  const img = getPbImageURL(data1, 'img');



  return (
    <>
      <header className='flex text text-center max-w-3xl justify-between px-8 pt-6 gap-5'>
        <form action="" method="get" className='w-[100%]'>
          <Input id='aroundSearch' label='장소 검색' type='search' inputRef={aroundSearch} placeholder='장소, 지명 검색' className='bg-lightPurple w-[100%]  h-9 rounded-full px-5 focus:outline-none focus:ring-none focus:ring-secondary search-cancel:rotate-45'  />
          </form>
        <Button>
          {<img src='/cart.svg' alt='장바구니' className='h-7 py-0.4' />}

        </Button>
      </header>
      <nav>
        <Category
            className='px-8 gap-2 pb-3 pt-3 border-b-[0.15rem] border-[#E1E1E1]'
            category={category}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            // icon={icon}
          />
      </nav>
        {/* 첫번째 지도 섹션 */}
      
      {/* {selectCategory==='목록' && selectCategory==='숙소' ? <AroundList img={img} title={title} star={data1?.star} price={data1?.price} />
      :( selectCategory==='숙소' ?<AroundMap img={img} title={title} star={data1?.star} price={data1?.price}  />:'')
      } */}

      {/* 두번째 호텔 섹션 */}
      
      {isCheck && selectCategory==='숙소'? <AroundList img={img} title={title} star={data1?.star} price={data1?.price} /> :<AroundMap img={img} title={title} star={data1?.star} price={data1?.price}  />}

      <Button type='button' className={`fixed bottom-[5.2rem] inset-x-0 z-10 mx-auto flex rounded-full w-[5.5rem] h-[2.5rem] bg-primary  font-semibold  text-[1rem] shadow-md py-2 px-4 gap-2 ${isCheck ?'bg-white text-primary border-primary border-[0.12rem] bottom-[5.8rem]':'text-white bottom-[15.5rem]' } `} onClick={() => {
               setCheck((e) => !e);
            }}
        >
        {isCheck ?<img src='/around-map.svg' alt='targetButton' className='py-2 translate-y-[-0.25rem]' />:<img src='/around-list.svg' alt='targetButton' className='py-2 translate-y-[-0.15rem]' />}  {isCheck ? "지도" : "목록"}
      </Button>
    </>
  )
}
export default AroundPage


