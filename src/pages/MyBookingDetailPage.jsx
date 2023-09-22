import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import { usePocketData } from '@/api/usePocketData';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { useNavigate, useParams } from 'react-router-dom';
import pb from '@/api/pocketbase';
import Guest from '@/components/Guest';
import Header from '@/components/Header';
import MetaTag from '@/components/MetaTag';
import Spinner from '@/components/Spinner';
import useAuthStore from '@/store/useAuthStore';
import MyForm from '@/components/MyForm';
import Input from '@/components/Input';
import Button from '@/components/Button';

function MyBookingDetailPage() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);
  const { date } = useParams();
  console.log(date);
  return (
    <>
      <MetaTag title='예약 상세' description='예약 상세' />
      <Header
        search='search'
        back='back'
        cart='cart'
        title='예약 상세'
        className='ml-10 text-xl font-semibold'
      ></Header>
      {!isAuth && <Guest></Guest>}
      {isAuth && (
        <>
          <section
            className='mx-auto mb-20 mt-0 w-[90%]
      flex-col rounded-3xl border-[1px] border-slate-300 p-6 text-sm shadow-lg sm:max-w-[500px] sm:text-base'
          >
            <article className='flex-shrink flex-grow whitespace-normal break-keep  border-b-[1px] border-slate-300 pb-2  text-center text-sm font-semibold sm:text-base'>
              <span className=' text-primary'>{user.username}</span>님의
              <span className='text-primary'>{date} </span>결제 내역
            </article>

            <ul
              className='flex w-full  flex-shrink flex-grow flex-col  items-center'
              // onSubmit={handleSubmit}
            >
              <li className='w-full max-w-md flex-row bg-red-500 p-2'>
                <div className='flex w-full flex-shrink-0 flex-grow-0 flex-row flex-wrap justify-between gap-y-2 bg-yellow-500'>
                  <div className='aspect-square h-auto w-[49%] overflow-hidden rounded-2xl bg-blue-500 p-1'>
                    <div className='mr-3 box-border aspect-square  h-14  w-14 flex-shrink-0 overflow-hidden rounded-2xl  bg-slate-100 lg:h-24 lg:w-24'>
                      <img src='/' alt='/' className=' aspect-square h-full w-full' />
                    </div>
                    <div>dsasdsad</div>
                    <div>dsasdsad</div>
                    <div>dsasdsad</div>
                  </div>
                  <div className='aspect-square w-[49%] bg-blue-500'>
                    <div className='mr-3 box-border aspect-square  h-10  w-10 flex-shrink-0 overflow-hidden rounded-2xl  bg-slate-100 lg:h-24 lg:w-24'>
                      <img src='/' alt='/' className=' aspect-square h-full w-full' />
                    </div>
                    <div>dsasdsad</div>
                    <div>dsasdsad</div>
                    <div>dsasdsad</div>
                  </div>
                  <div className='aspect-square w-[49%] bg-blue-500'>
                    <div className='mr-3 box-border aspect-square  h-10  w-10 flex-shrink-0 overflow-hidden rounded-2xl  bg-slate-100 lg:h-24 lg:w-24'>
                      <img src='/' alt='/' className=' aspect-square h-full w-full' />
                    </div>
                    <div>dsasdsad</div>
                    <div>dsasdsad</div>
                    <div>dsasdsad</div>
                  </div>
                  <div className='aspect-square w-[49%] bg-blue-500'>
                    <div className='mr-3 box-border aspect-square  h-10  w-10 flex-shrink-0 overflow-hidden rounded-2xl  bg-slate-100 lg:h-24 lg:w-24'>
                      <img src='/' alt='/' className=' aspect-square h-full w-full' />
                    </div>
                    <div>dsasdsad</div>
                    <div>dsasdsad</div>
                    <div>dsasdsad</div>
                  </div>
                </div>
              </li>
              <div className='w-full border-t-[1px] border-slate-300 pt-3 '>
                😘 마지막 단계 - 비밀번호 검증
              </div>
              <div className='flex w-full max-w-md justify-center' aria-required='true'>
                <Input
                  // inputRef={passwordRef}
                  type='password'
                  label='비밀번호 확인'
                  id='passwordConfirm'
                  placeholder='비밀번호 확인'
                  className='mb-4 mt-3 h-9 w-full border-b border-gray p-2 outline-primary'
                  labelClass='sr-only'
                  // onChange={handlePasswordChange}
                />
              </div>

              <Button
                type='submit'
                className={`mb-18 w-full max-w-md rounded-lg border py-2 text-center font-light text-primary outline-primary `}
                // onClick={() => updateMessage('탈퇴가 완료되었습니다.')}
                // disabled={!isFormValid}
              >
                <div className='flex items-end justify-center'>
                  <p className='text-xs font-light text-slate-400'>안녕..</p>탈퇴하기
                </div>
              </Button>
              <div role='alert' aria-live='assertive' aria-atomic='true' className='sr-only'>
                {/* {toastMessage} */}
              </div>
            </ul>
            <Toaster
              toastOptions={{
                duration: 1000,
                success: {
                  style: {
                    background: '#5D6FFF',
                    color: 'white',
                  },
                },
                error: {
                  style: {
                    background: '#E03B69',
                    color: 'white',
                  },
                },
              }}
            />
          </section>
        </>
      )}
    </>
  );
}
export default MyBookingDetailPage;
