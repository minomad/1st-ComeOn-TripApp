import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Input from '@/components/Input';
import MyChatMessage from '@/components/MyChatMessage';

function MyChatPage() {
  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='상담원 채팅'>
        상담원 채팅
      </Header>

      <section className='absolute left-1/2 top-1/2 h-[77%] w-[90%] -translate-x-1/2 -translate-y-1/2  transform rounded-3xl bg-lightPurple  shadow-lg sm:max-w-[500px]'>
        <article className='transformpy-8 absolute left-1/2 top-1/2 mb-3 h-[95%] w-[93%] -translate-x-1/2 -translate-y-1/2 rounded-3xl'>
          <div className='absolute left-1/2 top-[53%] h-[95%] w-[100%] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white'>
            <div className='absolute left-1/2 top-[50%] h-[93%] w-[91%] -translate-x-1/2 -translate-y-1/2 transform  '>
              <ul className=''>
                <li className=' absolute left-1/2 top-[50%] h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 transform overflow-scroll pb-6'>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                  <MyChatMessage></MyChatMessage>
                </li>
                <li>
                  {/* 인풋 컨테이너 */}
                  <div className='absolute bottom-0 left-0 w-full bg-white'>
                    <div className='flex  '>
                      <button className='hover:fill-pri fill-secondary'>
                        <img
                          src='/my-plus.svg'
                          alt='파일추가'
                          className='w-4 fill-secondary hover:fill-primary'
                        />
                      </button>
                      <div className='relative w-full pl-3'>
                        <form action='' className=' flex w-full'>
                          <Input
                            id='newchat'
                            placeholder=''
                            label='채팅입력'
                            labelClass='sr-only'
                            className={
                              'min-h-[25px] w-full rounded-xl border-[1px] border-primary bg-lightPurple pl-2 pr-2 shadow-md sm:h-[30px] sm:rounded-2xl'
                            }
                          ></Input>
                          <button
                            className='absolute right-[10px] top-[5px] hover:text-primary sm:top-[7px]'
                            type='submit'
                          >
                            <img src='/my-paperplane.svg' alt='채팅보내기' className='w-4' />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
export default MyChatPage;
