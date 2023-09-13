import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Button from '../components/Button';
import { toast } from 'react-hot-toast';

import { useNavigate, useParams } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import useStorage from '@/Hook/useStorage';
import { useQueryClient } from '@tanstack/react-query';

function MyNewQnaPage() {
  const { id } = useParams();
  const { createData: createQna } = usePocketData('qna');
  const { updateData: updateUser } = usePocketData('users');
  // const { storageData: authUser } = useStorage('pocketbase_auth');

  // const photoRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    // const userId = authUser?.model?.id;
    const title = titleRef.current.value;
    const text = textRef.current.value;
    // const img = photoRef.current.files;
    console.log(title);
    console.log(text);
    const qnaData = {
      title,
      text,
    };

    try {
      const created = await createQna(qnaData);
      await updateUser(id, {
        'qna+': created.id,
      });

      toast.success('리뷰가 등록되었습니다.');
    } catch (error) {
      toast.error('서버 요청 에러');
    }
  };
  // const handleReset = () => {
  //   titleRef.current.value = '';
  //   textRef.current.value = '';
  //   photoRef.current.files = '';
  // };

  // const [fileName, setFileName] = useState('');

  // const handleFileChange = (e) => {
  //   if (e.target.files.length > 0) {
  //     setFileName(e.target.files[0].name);
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='1:1문의'>
        1:1문의
      </Header>

      <section className='absolute left-1/2 top-1/2 flex h-[73%] w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-3xl bg-lightPurple p-3 shadow-lg sm:max-w-[500px] sm:p-5'>
        <form
          className='flex h-full w-full flex-col justify-between'
          // onReset={handleReset}
          onSubmit={handleRegister}
        >
          <div className='flex w-full border-b-[1px] border-slate-400 py-1 sm:py-3 '>
            <p className='mr-4 text-lg font-semibold'>ID</p>
            <p className='font-thin'>dsasdsd</p>
          </div>
          <div className='flex w-full border-b-[1px] border-slate-400 py-1 sm:py-3'>
            <p className='mr-4 text-lg font-semibold'>EMAIL</p>
            <p className='font-thin'>dsasdsd</p>
          </div>
          <div className='flex w-full items-start justify-start border-slate-400 pt-2 sm:py-3'>
            <p className='mr-4 h-8 w-auto flex-shrink-0 flex-grow-0 text-lg font-semibold'>제목</p>

            <input
              type='text'
              id='title'
              ref={titleRef}
              className='h-3 w-full rounded-2xl border-[1px] border-slate-400 p-3 sm:h-7'
            ></input>
          </div>
          <textarea
            name='qna'
            id='qna'
            ref={textRef}
            cols='30'
            rows='10'
            className='mb-auto h-full w-full flex-grow resize-none  rounded-2xl border-[1px] border-slate-400 p-3'
          ></textarea>
          <div className='flex w-full justify-between pt-2 sm:py-3'>
            <div className='flex items-end'>
              <input
                type='file'
                id='fileUpload'
                // onChange={handleUpload}
                // ref={photoRef}
                // onChange={handleFileChange}
                className='hidden flex-shrink-0'
              />
              <label
                htmlFor='fileUpload'
                tabIndex='0'
                className='mr-2 flex-shrink-0 cursor-pointer rounded-md border-[1px] p-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md'
              >
                파일첨부
              </label>
              <div className='w-28 flex-shrink-0 overflow-hidden overflow-ellipsis whitespace-nowrap sm:w-32 md:w-80'>
                {/* {fileName} */}
              </div>
            </div>
            <button
              type='reset'
              label='취소하기'
              className='ml-auto flex-shrink-0 rounded-md border-[1px] p-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md'
            >
              취소
            </button>
            <Button
              type='submit'
              label='저장하기'
              className='ml-auto flex-shrink-0 rounded-md border-[1px] p-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md'
            >
              저장
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
export default MyNewQnaPage;
