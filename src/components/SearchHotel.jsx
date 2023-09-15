import { useState } from 'react';
import SearchFavorite, { SearchFavoriteSecond } from './SearchFavorite';
import Input from './Input'
import CustomDate from './CustomDate'



function SearchHotel() {
  const categoryFisrt= ['제주', '이탈리아', '오사카', '스페인'];
  const categorySecond= ['태국', '싱가포르', '부산', '교토'];
  const [text, setText] = useState('');
  const [state, setstate] = useState('hotel')


  const onChange = (e) => {
    setText( console.log(e.target.value));
  };
  return (
    <>
    <section className=''>
      <h3 className='sr-only '>숙소 검색</h3>
      <div className='mt-3.5 pb-1 mx-auto w-[90%]  md:w-[80%] h-[5.7rem]  border-solid border-secondary rounded-2xl border-[0.1rem]'>
        <form action="" className='h-[50%]'>
          <img src='/searchPrimary.svg' alt='검색' className='inline-block mx-4 mb-1' />
          <Input 
            label='검색' 
            type='search' 
            id='숙소검색'placeholder='지역, 숙소명 키워드로 찾아보세요' 
            className=' mt-3 w-[84%] md:w-[88%] focus:outline-none' 
            labelClass='sr-only'
            onchange={onChange}
            />
        </form>
        <form action="" className='h-[50%] pl-4 inline-block w-[50%]   border-solid  '>
          <Input label='날짜' type='date' id='숙소날짜'placeholder='지역, 숙소명 키워드로 찾아보세요' className=' mt-2 ml-4 focus:outline-none font-semibold text-[1rem]' labelClass='sr-only' />
        </form>
        <div className='inline-block w-[50%] h-[50%]'>
          <img src='/myActive.svg' alt='인원수' className='inline-block mx-3 mb-1' />
          <span className=' font-semibold text-[1rem]'>성인 0, 아동 0</span>
        </div>
      </div>
      {/* 인기검색어, 최근검색 */}
        <div>
          <article className='mx-auto w-[88%] md:w-[78%] mt-7'>
            <h3 className='text-lg font-bold inline-block'>인기 검색어</h3>
            <CustomDate className='text-gray font-semibold text-[0.9rem] ml-3 mr-1.5'/>
            <span className='text-gray font-semibold text-[0.9rem] '>기준</span>
            <div className='flex mt-2 mb-8 md:mb-12'>
              <ul className='w-[50%]'>
                <SearchFavorite category={categoryFisrt} state={state}/>
              </ul>
              <ul>
                <SearchFavoriteSecond category={categorySecond} state={state}/>
             </ul>
            </div>
          </article>
          <article className='mx-auto w-[88%] md:w-[78%] mt-5'>
            <h3 className='text-lg font-semibold mb-4'>최근 검색</h3>
            <ul>
              <li className='bg-lightPurple font-semibold inline-block px-8 py-3 rounded-full'>제주 <img src='/close.svg' alt='검색' className='inline-block h-5 ml-3 pb-1.5' /></li>
            </ul>
          </article>
        </div>
        {/* 검색어 리스트 */}
        <article className='mx-auto w-[88%] md:w-[78%] mt-5'>
          <h3 className='sr-only'>검색어 리스트</h3>
          <ul>
            <li className='bg-lightPurple font-semibold  px-1 py-1 rounded-full'><img src='/locationActive.svg' alt='검색' className='inline-block w-5 mx-2' />{text} </li>
          </ul>
        </article>
      
                
     
     

    </section>
    </>
      
  )
}

export default SearchHotel



