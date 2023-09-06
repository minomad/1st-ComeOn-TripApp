import { useState } from 'react';
import { useRef } from 'react';
import Input from '../components/Input'
import Category from '../components/Category';
import Button from '../components/Button';
import { usePocketData } from '../api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { numberWithComma } from '../utils/numberWithComma';
import { getPbImageURL } from '../utils/getPbImageURL';


function AroundPage() {
  const [selectCategory, setSelectCategory] = useState('');
  const aroundSearch = useRef();
  const category = ['숙소', '레저/티켓'];

  const { getListData } = usePocketData('hotel');
  const { data } = useQuery(['hotel'], () => getListData());
  console.log(data?.[0]);
  const data1 = data?.[30];

  const title = data1?.title;
  const img = getPbImageURL(data1, 'img');



  return (
    <>
      <header className='flex text text-center max-w-3xl justify-between px-8 pt-6 gap-5'>
        <Input id='aroundSearch' label='장소 검색' type='search' inputRef={aroundSearch} placeholder='장소, 지명 검색' className='bg-lightPurple flex-grow h-9 rounded-full px-5 focus:outline-none focus:ring-1 focus:ring-secondary search-cancel:rotate-45'  />
        <img src='/cart.svg' alt='장바구니' className='h-7 py-0.4' />
      </header>
      <nav>
        <Category
            className='px-8 gap-2 pb-4 pt-3 border-b-[0.15rem] border-[#E1E1E1]'
            category={category}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
            // icon={icon}
          />
      </nav>
        {/* 첫번째 지도 섹션 */}
      <section className='px-8 relative'>
        <div  className='relative flex justify-between '>
          <Button type='button' className='mb-2 mt-auto w-9 h-9 text-gray2 font-medium  text-[1rem] border-[0.1rem] border-[#E1E1E1] shadow-md '>
            <img src='/around-target.svg' alt='targetButton' className='m-auto' />
          </Button>
          <Button type='button' className='mb-2 mt-auto flex rounded-full w-[5.5rem] h-[2.5rem] bg-primary text-white font-medium  text-[1rem] shadow-md py-2 px-4 gap-2 '
            >
            <img src='/around-list.svg' alt='targetButton' className='py-2' /> {'목록'}
          </Button>
          <div className='flex flex-col mb-2'>
              <Button type='button' className=' w-9 h-9 text-gray2 font-medium  text-[1rem] border-[0.1rem] border-[#E1E1E1] '>
              <img src='/around-plus.svg' alt='targetButton' className='m-auto' />
              </Button>
              <Button type='button' className=' w-9 h-9 text-gray2 font-medium  text-[1rem] border-[0.1rem] border-[#E1E1E1] shadow-md'>
              <img src='/around-minus.svg' alt='targetButton' className='m-auto' />
              </Button>
          </div>
        </div>
        <div className='h-[8.5rem] py-3 px-3   flex  shadow-md relative bg-white rounded-3xl'>
          <figure className='w-[35%]  overflow-hidden mr-4 rounded-2xl'>
            <img src={img} alt={title} className=' h-[110%] w-[100%]  cover object-cover' />
            <figcaption className='sr-only'>{title} </figcaption>
          </figure>
          {/* 호텔명, 별점, 가격 설명박스 */}
          <div className=''>
            <h2 className='font-bold'>{title}</h2>
            <img src='/around-star.svg' alt='별점' className='inline-block mb-[0.3rem] mr-[0.3rem] '/>
            <span className='font-extrabold text-[0.9rem]'>{ data1?.star} </span>

            <div className='block absolute right-5 bottom-5 '>
              <span className=' text-[0.9rem] mr-3 text-gray2'>숙박: 15:00~
              </span>
                <span className=' text-[1.2rem] font-bold '>{data1?.price}원</span>
            </div>
          </div>
        </div>
      </section>

      {/* 두번째 호텔 섹션 */}
      <section>
      <div className='h-[24rem] lg:h-[30rem] py-3   shadow-md relative bg-white '>
          <figure className='w-[100%] h-[63%]  overflow-hidden mr-4 '>
            <img src={img} alt={title} className=' h-[110%] w-[100%]  cover object-cover' />
            <figcaption className='sr-only'>{title} </figcaption>
          </figure> 
          {/* 호텔명, 별점, 가격 설명박스 */}
          <div className='px-3  '>
            <h2 className='font-bold'>{title}</h2>
            <img src='/around-star.svg' alt='별점' className='inline-block mb-[0.3rem] mr-[0.3rem] '/>
            <span className='font-extrabold text-[0.9rem]'>{ data1?.star} </span>

            <div className='block absolute right-5 bottom-17 '>
              <span className=' text-[0.9rem] mr-3 text-gray2'>숙박: 15:00~
              </span>
                <span className=' text-[1.2rem] font-bold '>{data1?.price}원</span>
            </div>
            <Button type='button' className='absolute right-5 bottom-2 mb-2 mt-auto flex rounded-full  bg-primary text-white font-medium  text-[1rem] shadow-md py-2 px-4 gap-2 '
            > {'숙소 예약하기'}
          </Button>
          </div>
        </div>
      </section>
    </>
  )
}
export default AroundPage


