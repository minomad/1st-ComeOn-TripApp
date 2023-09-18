import { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchFavorite, { SearchFavoriteSecond } from './SearchFavorite';
import Input from './Input'
import CustomDate from './CustomDate'


function SearchHotel({data}) {
  const categoryFisrt= ['제주', '이탈리아', '오사카', '스페인'];
  const categorySecond= ['태국', '싱가포르', '부산', '교토'];
  const [state, setstate] = useState('hotel')
  const [selectList, setselectList] = useState('1')
  const [selectOrder, setSelectOrder] = useState(false);
  const [userInput, setUserInput] = useState('');
  
  let filterData;

  const getValue = (e) => {
    setUserInput( e.target.value.toLowerCase());
  };
  switch (userInput) {
    case '부산':
      filterData = data.filter((hotel) => hotel.category === '부산');
      break;
    case '서울':
      filterData = data.filter((hotel) => hotel.category === '도심힐링');
      break;
    default:
      filterData = data.filter((hotel) => hotel.category === userInput);
      break;
    }

    const searched = data.filter((item) =>
    item.title.toLowerCase().includes(userInput)
  );
  return (
    <> 
    <section className=''>
      <h3 className='sr-only '>숙소 검색</h3>
      <div className='relative mt-3.5 pb-1 mx-auto w-[90%]  md:w-[80%] h-[5.7rem]  border-solid border-secondary rounded-2xl border-[0.1rem]'>
        <form action="" className='h-[50%]'>
          <img src='/searchPrimary.svg' alt='검색' className='inline-block mx-4 mb-1' />
          <Input 
            label='검색' 
            type='search' 
            id='숙소검색'placeholder='지역, 숙소명 키워드로 찾아보세요' 
            className=' mt-3 w-[84%] md:w-[88%] focus:outline-none' 
            labelClass='sr-only'
            onChange={getValue}
            />
        </form>
      
        <form action="" className=' h-[50%] pl-4 inline-block w-[50%]   border-solid  '>
          <Input label='날짜' type='date' id='숙소날짜' placeholder='지역, 숙소명 키워드로 찾아보세요' className=' mt-2 ml-4 pr-3 focus:outline-none font-semibold text-[1rem]' labelClass='sr-only' />
        </form>
        <div className=' inline-block w-[50%] h-[50%] ' onClick={() => {setSelectOrder((e) => !e)}}>
          <img src='/myActive.svg' alt='인원수' className='inline-block mx-3 mb-1' />
          <span className=' font-semibold text-[1rem]'>성인 {selectList}명</span>
        <div className={`absolute right-[6.5rem] md:right-[16.5rem] top-[5rem] w-[4rem] text-center bg-white rounded-md shadow-md ${!selectOrder ? 'hidden' : ''}`}>
            <ul>
              <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem] ' onClick={() => {
            setselectList('1')}}>1</li>
              <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]' onClick={() => {
            setselectList('2')}}>2</li>
              <li className='hover:bg-lightPurple text-[0.9rem] py-[0.5rem]' onClick={() => {
            setselectList('3')}}>3</li>
            </ul>
      </div>
        </div>
      </div>
        {/* 지역 검색 */}
        {userInput!==''?
          filterData.map((item) => (
         <SearchResult key={item.id} {...item} />
        )): ''}
        {/* 호텔이름 검색 */}
        {userInput!==''? 
          searched.map((item) => (
          <SearchResult key={item.id} {...item} />
        )) : ''}
      {/* 인기검색어, 최근검색 */}
      {userInput==='' ?
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
        : ''}
        {/* 검색어 리스트 */}
        {/* <article className='mx-auto w-[88%] md:w-[78%] mt-5'>
          <h3 className='sr-only'>검색어 리스트</h3>
          <ul>
            <li className='bg-lightPurple font-semibold  px-1 py-1 rounded-full'><img src='/locationActive.svg' alt='검색' className='inline-block w-5 mx-2' />{text} </li>
          </ul>
        </article>
       */}
                
     
     

    </section>
    </>
      
  )
}

export default SearchHotel



export function SearchResult({ title, id }) {   // 넘겨받은 객체 데이터중, id/name/email의 값만 받을것이다.
  return (
      <div className='mx-auto w-[88%] md:w-[78%] mt-5'>
        <Link to={`/hotel/${id}`}>
        <li className='bg-lightPurple font-semibold  px-1 py-1 rounded-full list-none'>
          <img src='/locationActive.svg' alt='검색' className='inline-block w-5 mx-2' />
          {title}
        </li>
        </Link>
      </div>
    
  );
}