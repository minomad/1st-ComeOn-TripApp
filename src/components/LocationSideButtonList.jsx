import { Link } from 'react-router-dom';
import Button from './Button'

function LocationSideButtonList({category, data}) {
  let hotelCategory;

  return (
    <>
    <ul className='flex  flex-col  flex-grow '>
      {category.map((item)=>{
        
        switch (item) {
          case '서울':
            hotelCategory = data.data.filter((hotel) => hotel.category === '도심힐링');
            break;
          case '강원':
            hotelCategory = data.data.filter((hotel) => hotel.category === '강원');
            break;
          case '광주':
            hotelCategory = data.data.filter((hotel) => hotel.category === '광주');
            break;
          default:
            hotelCategory = data.data.filter((hotel) => hotel.category === item);
            break;
          
        }
        
        return(
        <Link to={`${hotelCategory[0].category}`} key={item}>
          <li key={item} aria-label={item}><Button  type='button' className='hover:text-black w-[100%] text-gray2 font-[0.7rem] px-4 py-7 text-[0.9rem] border-b-[0.1rem] border-[#E1E1E1]'>{item}</Button></li>
        </Link>
        )
      })}
    </ul>
    </>
  )
}

export default LocationSideButtonList

