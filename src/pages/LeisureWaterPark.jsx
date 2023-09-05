import Header from '@/components/Header';
import LeisureCategory from '../components/LeisureCategory';
import { useState } from 'react';
import Entertainment from '../components/Entertainment';
import { usePocketData } from '../api/usePocketData';
import { useQuery } from '@tanstack/react-query';

function LeisureWaterPark() {
  const { getListData: getLeisureData } = usePocketData('leisure');
  const { data: leisureData } = useQuery(['leisure'], () => getLeisureData());
  const [selectCategory, setSelectCategory] = useState('');
  const category = ['전체', '워터파크', '스파'];

  return (
    <div>
      <Header
        className='ml-10 text-xl font-semibold'
        back='back'
        search='search'
        cart='cart'
        title='레저/티켓'
      />
      <LeisureCategory
        category={category}
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <div className='mx-5'>
          <Entertainment data={leisureData} selectCategory={selectCategory} />
      </div>
    </div>
  );
}

export default LeisureWaterPark;
