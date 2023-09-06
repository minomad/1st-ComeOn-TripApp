import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { usePocketData } from '../api/usePocketData';
import Header from '@/components/Header';
import Entertainment from '../components/Entertainment';
import LeisureCategory from '../components/LeisureCategory';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function LeisureThemePage() {
  const { getListData: getLeisureData } = usePocketData('leisure');
  const { data: leisureData } = useQuery(['leisure'], () => getLeisureData());
  const [selectCategory, setSelectCategory] = useState('');
  const [category, setCategory] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    switch (id) {
      case '테마파크':
        setCategory(['전체', '놀이동산', '아쿠아리움', '수목원', '동물원', '기타(테마파크)']);
        break;
      case '워터파크':
        setCategory(['전체', '워터파크', '스파']);
        break;
      case '전시·예매':
        setCategory(['전체', '전시', '공연']);
        break;
      case '투어·관광':
        setCategory(['전체', '투어패스', '케이블카', '유람선/요트', '축제']);
        break;
      default:
        break;
    }
  }, [id]);

  let filterData;
  filterData = leisureData?.filter((leisure) => leisure.largeCategory === `${id}`);

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
        <Entertainment data={filterData} selectCategory={selectCategory} />
      </div>
    </div>
  );
}

export default LeisureThemePage;
