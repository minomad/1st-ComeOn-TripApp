import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Button from '@/components/Button';
import MySelecModal from '@/components/MySelecModal';
import MyBasicButton from '@/components/MyBasicButton';
import { useEffect } from 'react';

function MyPage() {
  const [pageState, setPageState] = useState({
    selectedImage: '',
    isModalOpen1: false,
    isModalOpen2: false,
  });

  useEffect(() => {
    const images = [
      '/my-randombg1.png',
      '/my-randombg2.png',
      '/my-randombg3.png',
      '/my-randombg4.png',
    ];

    const randomIndex = Math.floor(Math.random() * images.length);

    setPageState((prevState) => ({
      ...prevState,
      selectedImage: images[randomIndex],
    }));
  }, []);

  const closeModal = (modalName) => {
    setPageState((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  const openModal = (modalName) => {
    setPageState((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
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
        <button
          type='button'
          className='h-28 w-full max-w-2xl overflow-hidden bg-gray sm:mb-0 sm:h-40 '
        >
          <img
            src={pageState.selectedImage}
            alt='배경이미지'
            className='absolute left-1/2  h-full w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden border-b-2 border-secondary object-cover shadow-md'
          />
          <img
            src={pageState.selectedImage}
            alt='랜덤 배경 이미지'
            className='absolute left-1/2 top-1/2 ml-[-45px] mt-3 aspect-square max-h-[90px] min-h-[90px] min-w-[90px] max-w-[90px] rounded-full border-2 border-secondary bg-gray object-fill shadow-md sm:mt-8
          md:ml-[-50px] md:mt-[28px] md:max-h-[100px] md:max-w-[100px] lg:ml-[-60px] lg:mt-[15px] lg:max-h-[120px] lg:max-w-[120px]'
          />
        </button>
        <h2 className='sr-only'></h2>
      </section>
      <section className='mt-20 w-full pb-20 sm:mt-24'>
        <ul className='flex flex-col items-center gap-2 text-center'>
          <li>
            <MyBasicButton type='button' towhere='mybooking' handler='mybooking'>
              나의예약
            </MyBasicButton>
          </li>
          <li>
            <MyBasicButton type='button' towhere='myreview' handler='myreview'>
              나의후기
            </MyBasicButton>
          </li>

          <li>
            <MyBasicButton type='button' towhere='myinfo' handler='myinfo'>
              정보변경
            </MyBasicButton>
          </li>
          <li>
            <MyBasicButton
              type='button'
              handler='connect'
              onClick={() => openModal('isModalOpen1')}
            >
              상담원 연결(채팅/통화)
            </MyBasicButton>
            {pageState.isModalOpen1 && (
              <MySelecModal
                onClose={() => closeModal('isModalOpen1')}
                MoveTo='mychatroom'
                option1='채팅'
                option2='취소'
              >
                <div>상담원 통화 가능 시간</div>
                <div>평일(공휴일 제외)</div>
                <div>09:00~17:00</div>
                <div>02-1234-5678</div>
                <div>채팅으로 연결할까요?</div>
              </MySelecModal>
            )}
          </li>

          <li>
            <MyBasicButton type='button' towhere='myqna' handler='myreview'>
              1:1문의
            </MyBasicButton>
          </li>
          <li>
            <Button type='button' className='text-sm leading-3 text-slate-600 underline'>
              로그아웃
            </Button>
          </li>
          <li>
            <Button
              type='button'
              onClick={() => openModal('isModalOpen2')}
              className={`text-[3px] leading-3 text-slate-400`}
            >
              회원 탈퇴
            </Button>
            {pageState.isModalOpen2 && (
              <MySelecModal
                onClose={() => closeModal('isModalOpen2')}
                MoveTo='/'
                option1='취소'
                option2='탈퇴'
              >
                <div>정말 탈퇴하시나요?</div>
                <div>2023.09.06 기준</div>
                <div>가입자 23m 돌파</div>
                <div>불편사항이 있으시다면</div>
                <div>02-1234-5678</div>
              </MySelecModal>
            )}
          </li>
        </ul>
      </section>
    </>
  );
}
export default MyPage;
