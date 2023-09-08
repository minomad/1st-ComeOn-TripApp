import { useState } from 'react';
import Button from './Button'
import LocationSideButton from './LocationSideButton';
import LocationSideButtonList from './LocationSideButtonList';



function LocationChoice() {
  const [selectLocationSide, setSelectLocationSide] = useState('서울');
  const locationSideButton = ['서울', '부산', '제주'];
  const buttonListFirst=['강남/역삼/삼성/논현', '신촌/홍대/합정', '잠실/신천(잠실새내)', '영등포/여의도']
  const buttonListSecond=['해운대/센텀시티/재송', '광안리/수영']
  const buttonListThird=['서귀포시/중문/모슬포', '애월/한림/협재', '제주시청/탑동/건입동']
  
  return (
    <div>   
    <section className='max-w-3xl flex justify-between gap-4'>
    <nav>
      <LocationSideButton className={'w-[10rem] lg:w-[15rem] '} locationSideButton={locationSideButton} selectLocationSide={selectLocationSide} setSelectLocationSide={setSelectLocationSide}></LocationSideButton>
    
    </nav>
    {selectLocationSide === '서울' && 
      <LocationSideButtonList category={buttonListFirst}  />
     }
     {selectLocationSide === '부산' && 
      <LocationSideButtonList category={buttonListSecond}  />
     }
     {selectLocationSide === '제주' && 
     <LocationSideButtonList category={buttonListThird}  />
    }
  </section></div>
  )
}

export default LocationChoice

