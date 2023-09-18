import { Link } from 'react-router-dom';
import TrafficReserveButton from './TrafficReserveButton'

function SearchTraffic() {
  return (
    <section>
    <h3 className='sr-only'>교통/항공 검색</h3>
      <ul className='mx-auto w-[87%] md:w-[77%]'>
      <Link to={'/install'}>
        <li><TrafficReserveButton src={'/leisure-bus.png'} alt={'고속버스'} /></li>
      </Link>
      <Link to={'/train'}>
        <li><TrafficReserveButton src={'/leisure-train.png'} alt={'기차'} /> </li>
      </Link> 
      <Link to={'/airline'}>
        <li><TrafficReserveButton src={'/leisure-airplane.png'} alt={'항공권'} /></li>
      </Link> 
      </ul>
    </section>
  )
}

export default SearchTraffic