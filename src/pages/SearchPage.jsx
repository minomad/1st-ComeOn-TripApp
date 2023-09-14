import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';

function SearchPage() {
  return (
    <>
      <Helmet>
        <title>검색페이지</title>
      </Helmet>
      <Header back='back' cart='cart' title='검색' className='text-xl font-semibold' />
    </>
  );
}
export default SearchPage;
