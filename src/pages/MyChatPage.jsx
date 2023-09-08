import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Input from '@/components/Input';

function MyChatPage() {
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

      <section className='relative'>
        <article className='mx-8 my-8 box-border min-h-[calc(100vh-170px)]  rounded-2xl bg-lightPurple text-sm shadow-lg sm:mx-36'>
          <div className='relative '>
            <ul className='px-3 sm:px-6'>
              <li>
                <div className='py-5 text-sm text-primary sm:text-base'>상담원 채팅</div>
              </li>
              {/* 채팅 컨테이너 */}
              <li
                className='relative box-border max-h-[calc(100vh-250px)] min-h-[calc(100vh-250px)] overflow-scroll  rounded-2xl bg-white text-sm shadow-md
              '
              >
                <div className='min-h-2 relative min-w-[20px] px-5 pb-3'>
                  <div className='id mb-2 flex justify-start'>
                    <div className='mr-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
                      <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
                    </div>
                    <div className=''>
                      <div className='text_container min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
                        <div className='text_field max-w-[500px] overflow-auto whitespace-normal'>
                          안녕 안녕 나는 진구야 ~ 헬륨 깨스 머거서 이르케 돼찌 ~
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='min-h-2 relative min-w-[20px] px-5 pb-3'>
                  <div className='id mb-2 flex justify-start'>
                    <div className='mr-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
                      <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
                    </div>
                    <div className=''>
                      <div className='text_container min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
                        <div className='text_field max-w-[500px] overflow-auto whitespace-normal'>
                          안녕 안녕 나는 진구야 ~ 헬륨 깨스 머거서 이르케 돼찌 ~
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='min-h-2 relative min-w-[20px] px-5 pb-3'>
                  <div className='id mb-2 flex justify-start'>
                    <div className='mr-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
                      <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
                    </div>
                    <div className=''>
                      <div className='text_container min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
                        <div className='text_field max-w-[500px] overflow-auto whitespace-normal'>
                          안녕 안녕 나는 진구야 ~ 헬륨 깨스 머거서 이르케 돼찌 ~
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='min-h-2 relative min-w-[20px] px-5 pb-3'>
                  <div className='id mb-2 flex justify-start'>
                    <div className='mr-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
                      <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
                    </div>
                    <div className=''>
                      <div className='text_container min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
                        <div className='text_field max-w-[500px] overflow-auto whitespace-normal'>
                          안녕 안녕 나는 진구야 ~ 헬륨 깨스 머거서 이르케 돼찌 ~
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='min-h-2 relative min-w-[20px] px-5 pb-3'>
                  <div className='id mb-2 flex justify-start'>
                    <div className='mr-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
                      <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
                    </div>
                    <div className=''>
                      <div className='text_container min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
                        <div className='text_field max-w-[500px] overflow-auto whitespace-normal'>
                          안녕 안녕 나는 진구야 ~ 헬륨 깨스 머거서 이르케 돼찌 ~
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='min-h-2 relative min-w-[20px] px-5 pb-3'>
                  <div className='id mb-2 flex justify-start'>
                    <div className='mr-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
                      <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
                    </div>
                    <div className=''>
                      <div className='text_container min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
                        <div className='text_field max-w-[500px] overflow-auto whitespace-normal'>
                          안녕 안녕 나는 진구야 ~ 헬륨 깨스 머거서 이르케 돼찌 ~
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='min-h-2 relative min-w-[20px] px-5 pb-3'>
                  <div className='id mb-2 flex justify-start'>
                    <div className='mr-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
                      <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
                    </div>
                    <div className=''>
                      <div className='text_container min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
                        <div className='text_field max-w-[500px] overflow-auto whitespace-normal'>
                          안녕 안녕 나는 진구야 ~ 헬륨 깨스 머거서 이르케 돼찌 ~
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='min-h-2 relative min-w-[20px] px-5 pb-3'>
                  <div className='id mb-2 flex justify-start'>
                    <div className='mr-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
                      <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
                    </div>
                    <div className=''>
                      <div className='text_container min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
                        <div className='text_field max-w-[500px] overflow-auto whitespace-normal'>
                          안녕 안녕 나는 진구야 ~ 헬륨 깨스 머거서 이르케 돼찌 ~
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='min-h-2 relative min-w-[20px] px-5 pb-3'>
                  <div className='id mb-2 flex justify-start'>
                    <div className='mr-3 aspect-square max-h-[40px] min-h-[40px] min-w-[40px] max-w-[40px] flex-shrink-0 items-start overflow-hidden rounded-full'>
                      <img src='/my-testimg.jpg' alt='프로필사진' className='aspect-square' />
                    </div>
                    <div className=''>
                      <div className='text_container min-w-[30px] rounded-2xl bg-lightPurple px-5 py-3'>
                        <div className='text_field max-w-[500px] overflow-auto whitespace-normal'>
                          안녕 안녕 나는 진구야 ~ 헬륨 깨스 머거서 이르케 돼찌 ~
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 인풋 컨테이너 */}
                <div className='absolute bottom-0 left-0 w-full bg-white py-2 pl-5 pr-3 sm:pr-3'>
                  <div className='flex  '>
                    <button>
                      <img src='/my-plus.svg' alt='파일추가' className='w-4' />
                    </button>
                    <div className='relative w-full'>
                      <form action='' className=' flex w-full'>
                        <Input
                          id='newchat'
                          placeholder='좋아요'
                          label='채팅입력'
                          className={
                            'mx-3 min-h-[25px] w-full rounded-xl border-[1px] border-primary bg-lightPurple pl-2 pr-2 shadow-md sm:h-[30px] sm:rounded-2xl sm:px-5'
                          }
                        ></Input>
                        <button
                          className='absolute right-[20px] top-[5px] sm:top-[7px]'
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
        </article>
      </section>
    </>
  );
}
export default MyChatPage;
