import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { usePocketData } from '../api/usePocketData';
import Header from '@/components/Header';
import Entertainment from '../components/Entertainment';
import LeisureCategory from '../components/LeisureCategory';

function LeisureThemePage() {
  const { getListData: getLeisureData } = usePocketData('leisure');
  const { data: leisureData } = useQuery(['leisure'], () => getLeisureData());
  const [selectCategory, setSelectCategory] = useState('');
  const category = ['전체', '놀이동산', '아쿠아리움', '수목원', '동물원', '기타(테마파크)'];

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

export default LeisureThemePage;
