import { getPbImageURL } from '@/utils/getPbImageURL';
import { numberWithComma } from '@/utils/numberWithComma';

import Button from './Button'
import { useState } from 'react';

function AroundList({data, selectCategory}) {
  let filterData;
  const [selectList, setselectList] = useState('추천순')
  
  const [selectOrder, setSelectOrder] = useState(false);

  switch (selectList) {
    case '추천순':
      filterData = data.filter((hotel) => hotel.category === '부산');
      break;
    case '인기순':
      filterData = data.filter((hotel) => hotel.category === '남쪽여행');
      break;
    case '최신순':
      filterData = data.filter((hotel) => hotel.category === '제주');
      break;
    default:
      filterData = data.filter((hotel) => hotel.category === selectCategory);
      break;
  }





  return (
    <section className='relative'>
    <h2 className='sr-only'>내 주변 숙소 목록</h2>
    <Button type='button' className='ml-auto mr-3 mt-auto flex rounded-full text-[0.9rem] py-2 px-4 font-bold'
      onClick={() => {setSelectOrder((e) => !e);}}
    > {selectList}   <img src='/back.svg' alt='뒤로가기' className='rotate-[270deg] w-5 pt-0.5' />
        </Button>
    <div className={` absolute right-9 top-8 w-[4rem] text-center bg-white rounded-md shadow-md ${!selectOrder ? 'hidden' : ''}`}>
          <ul>
            <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]' onClick={() => {
          setselectList('추천순')}}>추천순</li>
            <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]' onClick={() => {
          setselectList('인기순')}}>인기순</li>
            <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]' onClick={() => {
          setselectList('최신순')}}>최신순</li>
          </ul>
    </div>
    {filterData?.map((item) => (
      <article key={item.id} className='h-[30rem] lg:h-[33rem] py-1.2   shadow-md  bg-white '>
        <figure className='w-[100%] h-[57%] lg:h-[65%]  overflow-hidden mr-4 '>
          <img 
            src={getPbImageURL(item, 'img')} 
            alt={item.title} 
            className=' h-[120%] w-[110%]  cover object-cover' />
          <figcaption className='sr-only'>{item.title} </figcaption>
        </figure> 
        {/* 호텔명, 별점, 가격 설명박스 */}
        <div className='px-6 pt-3  '>
          <h2 className='font-bold text-lg'>{item.title}</h2>
          <img src='/star.svg' alt='별점' className='inline-block mb-[0.3rem] mr-[0.3rem] '/>
          <span className='font-extrabold text-[0.9rem]'>{item.star} </span>
          <span className='font-bold text-gray2 text-[0.9rem]'>&#183; {item.grade} </span>

          <div className=' flex justify-between py-4  '>
            <span className='block text-[0.9rem] mr-3 text-gray2'>숙박: 15:00~
            </span>
              <span className='block text-[1.2rem] font-extrabold '>{numberWithComma(item.price)}원</span>
          </div>
          <Button type='button' className='ml-auto mr-0 mb-2 mt-auto flex rounded-full  bg-primary text-white font-medium  text-[1rem] shadow-md py-2 px-6 gap-2 '
          > {'숙소 예약하기'}
        </Button>
        </div>
      </article>
      ))}
    
    </section>
  )
}

export default AroundList





export function AroundLeisureList({data, selectCategory}) {
  let filterData;
  const [selectList, setselectList] = useState('추천순')
  const [selectOrder, setSelectOrder] = useState(false);

  switch (selectList) {
    case '추천순':
      filterData = data.filter((leisure) => leisure.largeCategory === '테마파크');
      break;
    case '인기순':
      filterData = data.filter((leisure) => leisure.largeCategory === '워터파크');
      break;
    case '최신순':
      filterData = data.filter((leisure) => leisure.largeCategory === '전시·예매');
      break;
    default:
      filterData = data.filter((leisure) => leisure.largeCategory === selectCategory);
      break;
  }





  return (
    <section className='relative'>
    <h2 className='sr-only'>내 주변 레저/티켓 목록</h2>
    <Button 
      type='button' 
      className='ml-auto mr-3 mt-auto flex rounded-full  text-[0.9rem] py-2 px-4 font-bold'
      onClick={() => {setSelectOrder((e) => !e);}}
     > 
      {selectList}   <img src='/back.svg' alt='뒤로가기' className='rotate-[270deg] w-5 pt-0.5'/>
     </Button>
    <div className={`absolute right-9 top-8 w-[4rem] text-center bg-white rounded-md shadow-md ${!selectOrder ? 'hidden' : ''}`}>
          <ul>
            <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem] ' onClick={() => {
          setselectList('추천순')}}>추천순</li>
            <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]' onClick={() => {
          setselectList('인기순')}}>인기순</li>
            <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]' onClick={() => {
          setselectList('최신순')}}>최신순</li>
          </ul>
    </div>
    {filterData?.map((item) => (
      <article key={item.id} className='h-[30rem] lg:h-[33rem] py-1.2   shadow-md  bg-white '>
        <figure className='w-[100%] h-[57%] lg:h-[65%]  overflow-hidden mr-4 '>
          <img 
            src={getPbImageURL(item, 'main')} 
            alt={item.title} 
            className=' h-[120%] w-[110%]  cover object-cover' />
          <figcaption className='sr-only'>{item.title} </figcaption>
        </figure> 
        {/* 호텔명, 별점, 가격 설명박스 */}
        <div className='px-6 pt-3  '>
          <h2 className='font-bold text-lg'>{item.title}</h2>
          
          

          <div className=' flex justify-between py-2  '>
            <span className='block '>
            {item.label.map((label) => (
                  <span
                    key={label}
                    className='mr-1 mt-1 rounded-[2px] border-[1px] border-[#e6e6e6] bg-[#f2f2f2] px-1 py-[2px] text-[11px]'
                  >
                    {label}
                  </span>
                ))}
            </span>
              <span className='block text-[1.2rem] font-extrabold '>{numberWithComma(item.price)}원</span>
          </div>
          <Button type='button' className='ml-auto mr-0 mb-2 mt-auto flex rounded-full  bg-primary text-white font-medium  text-[1rem] shadow-md py-2 px-6 gap-2 '
          > {'상품 선택하기'}
        </Button>
        </div>
      </article>
      ))}
    
    </section>
  )
}

 

