import { useState } from 'react';
import Button from './Button'
import LocationSideButton from './LocationSideButton';
import LocationSideButtonList from './LocationSideButtonList';

function LocationChoice(data) {
  const [selectLocationSide, setSelectLocationSide] = useState('국내');
  const locationSideButton = ['국내', '일본', '?'];
  const buttonListFirst=['서울', '강원', '광주', '부산', '제주']
  const buttonListSecond=['도쿄', '후쿠오카', '오사카', '교토']
  const buttonListThird=['서귀포시/중문/모슬포', '애월/한림/협재', '제주시청/탑동/건입동']
  
  return (  
    <section className='max-w-3xl pt-[5rem] flex justify-between gap-4'>
      <h3 className='sr-only'>지역별</h3>
      <nav>
        <LocationSideButton className={'w-[9.5rem] lg:w-[15rem] '} locationSideButton={locationSideButton} selectLocationSide={selectLocationSide} setSelectLocationSide={setSelectLocationSide}></LocationSideButton>
      
      </nav>
      {selectLocationSide === '국내' && 
        <LocationSideButtonList category={buttonListFirst} data={data} />
      }
      {selectLocationSide === '일본' && 
        <LocationSideButtonList category={buttonListSecond} data={data} />
      }
      {selectLocationSide === '해외' && 
      <LocationSideButtonList category={buttonListThird} data={data} />
      }
    </section>
  )
}

export default LocationChoice

