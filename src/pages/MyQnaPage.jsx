import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Header from '@/components/Header';
import Button from '@/components/Button';
import MyCircleProfile from '@/components/MyCircleProfile';
import MyList from '@/components/MyList';
import Spinner from '@/components/Spinner';

function MyQnaPage() {
  const { id } = useParams();
  const { getListData } = usePocketData('qna');

  // Extract error and isError status
  const {
    data: qnaData,
    isLoading: isQnaLoading,
    error,
    isError,
  } = useQuery(['qna', id], () => getListData(id));

  if (isQnaLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return <div>에러 </div>;
  }

  if (!qnaData || qnaData.length === 0) {
    toast.error('❌ 문의 내역 없음');
  }

  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='마이 페이지'>
        메인페이지
      </Header>

      {/* 마이페이로 돌아갈 수 있는 버튼 기능의 이미지 */}
      <MyCircleProfile towhere='/mypage' imgpath='/ad.png' imgalt='프로필사진'></MyCircleProfile>

      <section className='box-border flex  justify-center pb-20'>
        <ul className=' box-border h-auto w-2/3 rounded-2xl bg-lightPurple px-3 pb-1 pt-4 text-sm'>
          <li className='box-border flex flex-row items-center justify-between  pb-3 text-primary'>
            <div className='font-semibold'>문의 내역</div>
            <Link to='mynewqna' tabIndex='-1'>
              <Button type='button' className='rounded-md bg-primary px-1 text-white'>
                문의하기
              </Button>
            </Link>
          </li>

          {qnaData &&
            qnaData.length > 0 &&
            qnaData.map((item) => (
              <MyList
                src={getPbImageURL(item, 'img')}
                key={item.id}
                handler=''
                title={item.title}
                second={item.text}
                date={item.created.slice(0, 10)}
                className0='justify-start'
                className2=' box-border text-xs line-clamp-2 h-[30px] sm:line-clamp-3 sm:h-[60px] sm:text-sm'
                className3='box-border text-xs sm:text-sm'
              />
            ))}
        </ul>
      </section>
    </>
  );
}

export default MyQnaPage;
