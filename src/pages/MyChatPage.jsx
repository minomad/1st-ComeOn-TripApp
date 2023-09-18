import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Input from '@/components/Input';
import MyChatMessage from '@/components/MyChatMessage';

function MyChatPage() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef();
  const chatRef = useRef();
  const fileInputRef = useRef();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');

  const handleImageClick = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      // 읽기가 완료되면 결과를 previewUrl 상태에 저장
      setPreviewUrl(reader.result);
    };

    // 파일 읽기 시작
    reader.readAsDataURL(file);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    // 이미지 또는 텍스트 메시지가 있는 경우에만 메시지를 전송
    if (inputRef.current.value !== '' || previewUrl) {
      // 메시지에 이미지 URL 추가
      setMessages([...messages, { text: inputRef.current.value, imageUrl: previewUrl }]);
      inputRef.current.value = '';
      // 미리보기 초기화
      setPreviewUrl(null);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='상담원 채팅'>
        상담원 채팅
      </Header>

      <section className='absolute left-1/2 top-1/2 h-[77%] w-[90%] -translate-x-1/2 -translate-y-1/2  transform rounded-3xl bg-lightPurple  shadow-lg sm:max-w-[500px]'>
        <article className='absolute left-1/2 top-1/2 mb-3 h-[95%] w-[93%] -translate-x-1/2 -translate-y-1/2 transform rounded-3xl py-8'>
          <div className='absolute left-1/2 top-[53%] h-[95%] w-[100%] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-white'>
            <div className='absolute left-1/2 top-[50%] h-[93%] w-[91%] -translate-x-1/2 -translate-y-1/2 transform  '>
              <ul className=''>
                <li
                  className=' absolute left-1/2 top-[50%] h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 transform overflow-scroll pb-6'
                  ref={chatRef}
                >
                  {messages.map((message, index) => (
                    <div key={index}>
                      <MyChatMessage message={message.text}>
                        {/* 이미지가 있는 경우만 렌더링 */}
                        {message.imageUrl && (
                          <div className='m-2 flex h-12 w-12 items-center justify-center align-middle'>
                            <img
                              src={message.imageUrl}
                              alt=''
                              className='h-full w-full cursor-pointer object-cover'
                              onClick={() => handleImageClick(message.imageUrl)}
                            />
                          </div>
                        )}
                      </MyChatMessage>
                    </div>
                  ))}

                  {isModalOpen && (
                    <div
                      className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-10 align-middle'
                      onClick={closeModal}
                    >
                      <img
                        src={modalImageUrl}
                        alt=''
                        className='max-h-[80%] max-w-[80%] object-contain'
                      />
                    </div>
                  )}
                </li>
                <li>
                  {/* 인풋 컨테이너 */}
                  <div className='absolute bottom-0 left-0 w-full bg-white'>
                    <div className='flex'>
                      <button
                        className=' fill-secondary hover:fill-primary'
                        type='file'
                        onClick={() => fileInputRef.current.click()}
                      >
                        <img
                          src='/my-plus.svg'
                          alt='파일추가'
                          className={`w-4 fill-secondary hover:fill-primary`}
                        />
                        <input
                          type='file'
                          ref={fileInputRef}
                          className='sr-only'
                          onChange={handleFileChange}
                        />
                      </button>
                      {previewUrl && (
                        <div className='absolute top-[-100px] z-40 h-24 w-24 rounded-sm bg-slate-200 p-2 shadow-md'>
                          {/* 삭제 버튼 */}
                          <button
                            onClick={() => setPreviewUrl(null)}
                            className='absolute left-[-5px] top-[-15px] h-2 w-2 align-middle text-xl text-primary '
                          >
                            x
                          </button>

                          <img
                            src={previewUrl}
                            alt='Preview'
                            className='h-full w-full object-cover'
                          />
                        </div>
                      )}
                      <div className='relative w-full pl-3'>
                        <form action='' onSubmit={handleSendMessage} className=' flex w-full'>
                          <Input
                            inputRef={inputRef}
                            id='newchat'
                            placeholder=''
                            label='채팅입력'
                            labelClass='sr-only'
                            className={
                              'min-h-[25px] w-full rounded-xl border-[1px] border-primary bg-lightPurple pl-2 pr-8 shadow-md sm:h-[30px] sm:rounded-2xl'
                            }
                          ></Input>
                          <button
                            className=':text-primary absolute right-[10px] top-[5px] sm:top-[7px]'
                            type='submit'
                          >
                            <img src='/my-paperplane.svg' alt='채팅보내기' className={`w-4`} />
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
