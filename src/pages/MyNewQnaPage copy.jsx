import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Button from '../components/Button';
import { toast } from 'react-hot-toast';
import pb from '../api/pocketbase';
import { useNavigate } from 'react-router-dom';
import { usePocketData } from '@/api/usePocketData';
import useStorage from '@/Hook/useStorage';
import { useQueryClient } from '@tanstack/react-query';

function MyNewQnaPage() {
  const navigate = useNavigate();
  const { createData: createQna } = usePocketData('qna');
  const { updateData: updateQna } = usePocketData('qna');
  const { storageData: authUser } = useStorage('pocketbase_auth');
  const { updateData: updateUser } = usePocketData('users');

  const queryClient = useQueryClient();

  const formRef = useRef(null);
  const photoRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const textValue = textRef.current.value;
    // const photoValue = photoRef.current.files;

    if (!titleValue && !textValue) {
      toast('제목, 내용 입력이 필요합니다.', {
        icon: '🚨',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });

      return;
    }

    const formData = new FormData();

    formData.append('title', titleValue);
    formData.append('text', textValue);

    // if (photoValue.length > 0) {
    //   formData.append('img', photoValue[0]);
    // }

    try {
      const created = await createQna();
      await updateQna(qnaId, {
        'review+': created.id,
      });
      updateUser(userId, {
        'review+': created.id,
      });
      await pb.collection('qna').create(formData);
      navigate('/myqna');
    } catch (error) {
      console.error(error);
    }
  };

  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

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
          encType='multipart/form-data'
          ref={formRef}
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

            <Input
              type='text'
              id='title'
              ref={titleRef}
              className='h-3 w-full rounded-2xl border-[1px] border-slate-400 p-3 sm:h-7'
            ></Input>
          </div>
          <textarea
            name=''
            id=''
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
                ref={photoRef}
                onChange={handleFileChange}
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
                {fileName}
              </div>
            </div>

            <Button
              type='submit'
              label='저장하기'
              className='ml-auto flex-shrink-0 rounded-md border-[1px] p-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md'
            >
              저장하기
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
export default MyNewQnaPage;
