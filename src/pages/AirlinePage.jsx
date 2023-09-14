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
        <h3></h3>
      </section>
    </>
  );
}
export default AirlinePage;
