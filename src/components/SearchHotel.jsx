import { useState } from 'react';
import SearchFavorite, { SearchFavoriteSecond } from './SearchFavorite';
import Input from './Input'
import CustomDate from './CustomDate'
import debounce from '../utils/debounce';
import SearchResult from './SearchResult';
import NumberOfPeople from './NumberOfPeople';
import useStorage from '../Hook/useStorage';

function SearchHotel({data}) {
  const categoryFisrt= ['제주', '이탈리아', '오사카', '스페인'];
  const categorySecond= ['태국', '싱가포르', '부산', '교토'];
  const [state, setstate] = useState('hotel')
  const [selectNumber, setSelectNumber] = useState('1')
  const [selectList, setSelectList] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [searchedData, setSearchedData] = useState('');
  const number = ['1', '2', '3', '4']
  let filterData;


  /* useStorage 사용 */
  const {storageData:searchData, update} = useStorage('searchData', [])

  const getValue = (e) => {
    setUserInput( e.target.value.toLowerCase());

    if (userInput !== '') {
      const recentSearch = [...searchData,userInput];

      setTimeout(() => {
      update(recentSearch);
      setSearchedData(true)
    }, 1000);
      
    }
  };

  const removeSearch = (e) => {
    const clickedIndex = e.target.id;
    searchData.splice(clickedIndex, 1);
    update(searchData);
    setSearchedData(e);
  };
  const resetText = () => {
    setUserInput('')
  }
  
  

  switch (userInput) {
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
      <h2 className='sr-only '>숙소 검색</h2>
      <div role="search" className=' mt-3.5 pb-1 mx-auto w-[90%]  md:w-[80%] h-[5.7rem]  border-solid border-secondary rounded-2xl border-[0.1rem]'>
        <form action="" className='h-[50%] relative flex'>
          <img src='/searchPrimary.svg' alt='' className='inline-block mx-4 h-5 mt-4' />
            <label htmlFor='searchHotel' className='sr-only'>검색</label>
             <input
              type='search'
              name='searchHotel'
              id='searchHotel'
              placeholder='지역, 숙소명 키워드로 찾아보세요'
              className=' mt-3 mr-3 flex-grow   focus:outline-none'
              onChange={debounce(getValue)}
            />
            
           <button type="reset" className="absolute right-2  bottom-0.2 bg-white px-4 py-2 mt-3 " aria-pressed="false" onClick={resetText}>
            <img
                src='/SearchClose.svg'
                alt='닫기'
                className='h-4 w-4'
            />
           </button>
        </form>
      
        <form action="" className=' h-[50%] pl-4 inline-block w-[50%]   border-solid  '>
          <Input label='날짜' type='date' id='hotelDate' placeholder='지역, 숙소명 키워드로 찾아보세요' className=' mt-2 mx-3 pr-3 focus:outline-none font-semibold text-[0.95rem] md:text-[1rem]' labelClass='sr-only' />
        </form>
        <NumberOfPeople number={number} selectNumber={selectNumber} setSelectNumber={setSelectNumber} selectList={selectList} setSelectList={setSelectList} className='inline-block w-[50%] text-[0.9rem] md:text-[1rem] ' NumberBoxclassName='left-[3.5rem]  top-[1.6rem] w-[4rem] text-center bg-white rounded-md shadow-md'/>
        
      </div>
        {/* 지역 검색 */}
        {userInput!==''? 
          <SearchResult data={filterData}  state={state} />
        : ''}
        {/* 호텔이름 검색 */}
        {userInput!==''? 
          <SearchResult data={searched}  state={state} />
         : ''}
      {/* 인기검색어, 최근검색 */}
      {userInput==='' ?
        <section className='pb-[8rem]'>
          <article className='mx-auto w-[88%] md:w-[78%] mt-7'>
            <h2 className='text-lg font-bold inline-block' id='popularSearch'>인기 검색어</h2>
            <CustomDate className='text-gray font-semibold text-[0.9rem] ml-3 mr-1.5'/>
            <span className='text-gray font-semibold text-[0.9rem] '>기준</span>
            <div className='flex mt-2 mb-8 md:mb-12' aria-labelledby="popularSearch" role="group">
              <ul className='w-[50%]'>
                <SearchFavorite category={categoryFisrt} state={state}/>
              </ul>
              <ul>
                <SearchFavoriteSecond category={categorySecond} state={state}/>
             </ul>
            </div>
          </article>

          <article className='mx-auto w-[88%] md:w-[78%] mt-5'>
            <h2 className='text-lg font-semibold mb-4' id='recentSearch'>최근 검색</h2>
            <ul role='group' aria-labelledby='recentSearch'  className='flex flex-row'>
            
            { searchData?.map((item, index)=>(
              <li key={index} className='bg-lightPurple flex-shrink-0 font-semibold inline-block px-8 py-3 rounded-full'>
                {item}
                <button  type='button' className='' aria-pressed='false' onClick={removeSearch}>
                  <img id={index} src='/close.svg' alt='최근 검색 지우기' className='inline-block h-5 ml-3 pb-1.5' />
                </button>
                </li>

            ))}
            </ul>
          </article>
        </section>
        : ''}
      
    </section>
    </>
      
  )
}

export default SearchHotel



