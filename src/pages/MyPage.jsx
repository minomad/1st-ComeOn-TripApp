import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

import Header from '@/components/Header';
import Button from '../components/Button';
import Category from '@/components/Category';
import Modal from '../components/Modal';
import MySelecModal from '../components/MySelecModal';

function MyPage() {
  const [isActive, setIsActive] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIsActive = (name) => {
    setIsActive(name);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='마이 페이지'>
        메인페이지
      </Header>
      <section className='relative'>
        <button type='button' className='h-40 w-full bg-gray'>
          <img src='/' alt='배경이미지' />
          <img
            src='/'
            alt='/'
            className='absolute left-1/2 ml-[-45px] mt-[22px] min-h-[90px] min-w-[90px] rounded-full border-2 border-secondary bg-gray
          shadow-md md:ml-[-50px] md:mt-[13px] md:h-[100px] md:w-[100px] lg:ml-[-60px] lg:mt-[7px] lg:h-[120px] lg:w-[120px]'
          />
        </button>
        <h2 className='sr-only'></h2>
      </section>
      <section className='mt-28 w-full'>
        <ul className='flex flex-col items-center gap-2 text-center'>
          <li>
            <Link to='mybooking'>
              <Button
                type='button'
                onMouseOver={() => handleIsActive('mybooking')}
                onMouseLeave={() => handleIsActive('')}
                className={`mb-2 h-11 w-60 rounded-full border-2 font-semibold ${
                  isActive === 'mybooking'
                    ? 'bg-secondary font-bold text-white shadow-md'
                    : ' border-secondary text-secondary'
                }`}
              >
                나의 예약
              </Button>
            </Link>
          </li>
          <li>
            <Link to='myreview'>
              <Button
                type='button'
                onMouseOver={() => handleIsActive('review')}
                onMouseLeave={() => handleIsActive('')}
                className={`mb-2 h-11 w-60 rounded-full border-2 font-semibold ${
                  isActive === 'review'
                    ? 'bg-secondary font-bold text-white shadow-md'
                    : ' border-secondary text-secondary'
                }`}
              >
                나의 후기
              </Button>
            </Link>
          </li>

          <li>
            <Link to='/'>
              <Button
                type='button'
                onClick={isActive}
                onMouseOver={() => handleIsActive('my')}
                onMouseLeave={() => handleIsActive('')}
                className={`mb-2 h-11 w-60 rounded-full border-2 font-semibold ${
                  isActive === 'my'
                    ? 'bg-secondary font-bold text-white shadow-md'
                    : ' border-secondary text-secondary'
                }`}
              >
                정보 변경
              </Button>
            </Link>
          </li>
          <li>
            <Button
              type='button'
              onClick={() => {
                setIsModalOpen(true);
              }}
              onMouseOver={() => handleIsActive('connect')}
              onMouseLeave={() => handleIsActive('')}
              className={`mb-2 h-11 w-60 rounded-full border-2 font-semibold ${
                isActive === 'connect'
                  ? 'bg-secondary font-bold text-white shadow-md'
                  : ' border-secondary text-secondary'
              }`}
            >
              상담원 연결(채팅/통화)
            </Button>
            {isModalOpen === true ? (
              <MySelecModal onClose={closeModal} MoveTo='mychatroom' option1='채팅' option2='취소'>
                <div>상담원 통화 가능 시간</div>
                <div>평일(공휴일 제외)</div>
                <div>09:00~17:00</div>
                <div>02-1234-5678</div>
                <div>채팅으로 연결할까요?</div>
              </MySelecModal>
            ) : null}
          </li>

          <li>
            <Link to='/'>
              <Button
                type='button'
                onClick={isActive}
                onMouseOver={() => handleIsActive('my')}
                onMouseLeave={() => handleIsActive('')}
                className={`mb-2 h-11 w-60 rounded-full border-2 font-semibold ${
                  isActive === 'my'
                    ? 'bg-secondary font-bold text-white shadow-md'
                    : ' border-secondary text-secondary'
                }`}
              >
                1:1 문의
              </Button>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <Button
                type='button'
                onClick={isActive}
                onMouseOver={() => handleIsActive('my')}
                onMouseLeave={() => handleIsActive('')}
                className={`mb-2 h-11 w-60 rounded-full border-2 font-semibold ${
                  isActive === 'my'
                    ? 'bg-secondary font-bold text-white shadow-md'
                    : ' border-secondary text-secondary'
                }`}
              >
                회원 탈퇴
              </Button>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
export default MyPage;
