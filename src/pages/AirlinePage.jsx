import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';

function AirlinePage() {
  return (
    <>
      <Helmet>
        <title>야무지개놀자 항공</title>
      </Helmet>
      <Header back='back' search='search' title='항공' className='text-xl font-semibold' />
      <section>
        <div className='flex flex-col justify-center'>
          <img src="/airplane.png" alt="비행기" className='w-[90px]' />
          <span>설레는 여행의 즐거운 시작</span>
          <h3>야무지개놀자 항공</h3>
        </div>
      </section>
    </>
  );
}
export default AirlinePage;
