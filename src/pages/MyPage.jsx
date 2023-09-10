import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Button from '@/components/Button';
import MySelecModal from '@/components/MySelecModal';
import MyBasicButton from '@/components/MyBasicButton';

function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState({
    isModalOpen1: false,
    isModalOpen2: false,
  });

  const closeModal = (modalName) => {
    setIsModalOpen({
      ...isModalOpen,
      [modalName]: false,
    });
  };
  const openModal = (modalName) => {
    setIsModalOpen({
      ...isModalOpen,
      [modalName]: true,
    });
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
          <img
            src='/my-testbg.jpeg'
            alt='배경이미지'
            className='h-full w-full overflow-hidden object-cover'
          />
          <img
            src='/ad.png'
            alt='/'
            className='absolute left-1/2 top-1/2 ml-[-45px] mt-8 aspect-square max-h-[90px] min-h-[90px] min-w-[90px] max-w-[90px] rounded-full border-2 border-secondary bg-gray object-cover shadow-md
          md:ml-[-50px] md:mt-[28px] md:max-h-[100px] md:max-w-[100px] lg:ml-[-60px] lg:mt-[15px] lg:max-h-[120px] lg:max-w-[120px]'
          />
        </button>
        <h2 className='sr-only'></h2>
      </section>
      <section className='mt-28 w-full'>
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
            {isModalOpen.isModalOpen1 && (
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
            <Button
              type='button'
              onClick={() => openModal('isModalOpen2')}
              className={`mb-2 h-8 w-52 rounded-full text-sm font-semibold text-secondary shadow-md hover:bg-primary hover:font-bold hover:text-white md:h-11 md:w-60 md:text-base`}
            >
              회원 탈퇴
            </Button>
            {isModalOpen.isModalOpen2 && (
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
