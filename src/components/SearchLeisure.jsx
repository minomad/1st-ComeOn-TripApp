import { useState } from 'react';
import SearchFavorite,  { SearchFavoriteSecond } from './SearchFavorite';
import CustomDate from './CustomDate'
import debounce from '../utils/debounce';
import SearchResult from './SearchResult';

function SearchLeisure({data}) {
  let filterData;
  const categoryFisrt= ['놀이동산', '동물원', '전시', '워터파크'];
  const categorySecond= ['아쿠아리움', '케이블카', '스파', '축제'];
  const [state, setstate] = useState('leisure')
  const [userInput, setUserInput] = useState('');

  const getValue = (e) => {
    setUserInput( e.target.value.toLowerCase());
  };
  switch (userInput) {
    case '놀이동산':
      filterData = data.filter((leisure) => leisure.category === '놀이동산');
      break;
    case '서울':
      filterData = data.filter((leisure) =>leisure.category === '도심힐링');
      break;
    default:
      filterData = data.filter((leisure) => leisure.category === userInput);
      break;
    }
    const searched = data.filter((item) =>
    item.title.toLowerCase().includes(userInput)
  ); 

  return (
    <section className='pb-[8rem]'>
      <h2 className='sr-only'>레저/티켓 검색</h2>
      <form action="" className='flex relative mt-3.5 py-3 mx-auto w-[90%]  md:w-[80%]   border-solid border-secondary rounded-2xl border-[0.1rem]'>
        <img src='/searchPrimary.svg' alt='' className='inline-block mx-4 ' />
        <label htmlFor='SearchLeisure' className='sr-only'>검색</label>
        <input
              type='search'
              name='SearchLeisure'
              id='SearchLeisure'
              placeholder='지역, 숙소명 키워드로 찾아보세요'
              className='mr-3 flex-grow  focus:outline-none'
              onChange={debounce(getValue)}
          />
            
        <button type="reset" aria-label='검색어 초기화 버튼'  className="absolute right-2  bottom-0.2 bg-white px-4 py-1 " aria-pressed="false">
          <img
                  src='/SearchClose.svg'
                  alt=''
                  className='h-4 w-4'
          />
        </button>
      </form>
      {/* 지역 검색 */}
      {userInput!==''? 
          <SearchResult data={filterData} state={state}  />
        : ''}
        {/* 호텔이름 검색 */}
        {userInput!==''? 
          <SearchResult data={searched}  state={state} />
         : ''}
       {userInput==='' ?  
        <article className='mx-auto w-[88%] md:w-[78%] mt-7'>
            <h2 className='text-lg font-bold inline-block' id='popularSearch'>인기 검색어</h2>
            <CustomDate className='text-gray font-semibold text-[0.9rem] ml-3 mr-1.5'/>
              <span className='text-gray font-semibold text-[0.9rem] '>기준</span>
            <div className='flex mt-2 mb-8 md:mb-12' aria-labelledby="popularSearch">
              <ul className='w-[50%]'>
                <SearchFavorite category={categoryFisrt} state={state}/>
              </ul>
              <ul>
                <SearchFavoriteSecond category={categorySecond} state={state} />
              </ul>
            </div>
          </article>
           : ''}
    </section>
  )
}

export default SearchLeisure