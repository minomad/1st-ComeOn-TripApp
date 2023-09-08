import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Input from '@/components/Input';

function MyInfoPage() {
  const [isActive, setIsActive] = useState('');

  const handleIsActive = (name) => {
    setIsActive(name);
  };
  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='마이 페이지'>
        메인페이지
      </Header>
      {/* 마이페이로 돌아갈 수 있는 버튼 기능의 이미지 */}
      <section className='mb-10 flex items-center justify-center'>
        <Link to='/mypage'>
          <Button
            type='button'
            onMouseOver={() => handleIsActive('mypage')}
            onMouseLeave={() => handleIsActive('')}
            className={`mt-12  min-h-[90px] min-w-[90px] rounded-full border-2 border-secondary
            bg-gray shadow-md md:mt-24 lg:h-[90px] lg:w-[90px] xl:h-[100px] xl:w-[100px] ${
              isActive === 'mypage' ? 'shadow-2xl' : ''
            }`}
          >
            <img src='/' alt='/' />
          </Button>
        </Link>
      </section>
      <section className='mt-20 flex w-full flex-col items-center justify-center text-center md:mt-28'>
        <div className=' mb-2 h-11 w-60 rounded-full border-[1px] border-secondary bg-lightPurple pt-1 text-center text-xs font-semibold text-secondary shadow-md'>
          정보 변경을 위해 로그인 시 사용하시는 <br />
          비밀번호를 입력해주세요.
        </div>
        <Input
          type='text'
          id='password'
          placeholder='비밀번호'
          className='mt-20 h-11 w-72 border-b-[1px] border-neutral-200 sm:w-80'
        ></Input>
        <Button
          type='submit'
          className='mt-10 h-11 w-72 rounded-xl border-[1px] border-secondary text-secondary sm:w-80'
        >
          정보 변경
        </Button>
      </section>
    </>
  );
}
export default MyInfoPage;
