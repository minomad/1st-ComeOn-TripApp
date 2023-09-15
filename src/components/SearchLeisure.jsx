import { useState } from 'react';
import Input from './Input'
import SearchFavorite,  { SearchFavoriteSecond } from './SearchFavorite';
import CustomDate from './CustomDate'

function SearchLeisure() {
  const categoryFisrt= ['놀이동산', '동물원', '전시', '워터파크'];
  const categorySecond= ['아쿠아리움', '케이블카', '스파', '축제'];
  const [state, setstate] = useState('leisure')

  return (
    <section>
      <h3 className='sr-only'>레저/티켓 검색</h3>
      <form action="" className='h-[50%] mt-3.5 py-3 mx-auto w-[90%]  md:w-[80%]   border-solid border-secondary rounded-2xl border-[0.1rem]'>
        <img src='/searchPrimary.svg' alt='검색' className='inline-block mx-4 mb-1' />
        <Input label='검색' type='search' id='숙소검색'placeholder='레저명, 테마 키워드로 찾아보세요' className='w-[84%] md:w-[88%] focus:outline-none' labelClass='sr-only' />
      </form>
      <article className='mx-auto w-[88%] md:w-[78%] mt-7'>
          <h3 className='text-lg font-bold inline-block'>인기 검색어</h3>
          <CustomDate className='text-gray font-semibold text-[0.9rem] ml-3 mr-1.5'/>
            <span className='text-gray font-semibold text-[0.9rem] '>기준</span>
          <div className='flex mt-2 mb-8 md:mb-12'>
            <ul className='w-[50%]'>
              <SearchFavorite category={categoryFisrt} state={state}/>
            </ul>
            <ul>
              <SearchFavoriteSecond category={categorySecond} state={state} />
            </ul>
          </div>
        </article>
    </section>
  )
}

export default SearchLeisure