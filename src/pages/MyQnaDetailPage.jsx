import { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast, Toaster } from 'react-hot-toast';
import { getPbImageURL } from '@/utils/getPbImageURL';
import { usePocketData } from '@/api/usePocketData';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Header from '@/components/Header';
import useAuthStore from '@/store/useAuthStore';
import Spinner from '@/components/Spinner';
import pb from '@/api/pocketbase';

const resetData = {
  title: '',
  text: '',
  img: '',
};

function MyQnaDetailPage() {
  const { id } = useParams(); //주소창에서 이 해당 아이디 가져다가
  const { getIdData: getQna } = usePocketData('qna'); //qna 테이블에서 id 챙겨
  // const { getListData: getQnaList } = usePocketData('qna');
  const navigate = useNavigate();

  const isAuth = useAuthStore((state) => state.isAuth);
  const { updateData: updateUser } = usePocketData('users');
  const { updateData: updateQna } = usePocketData('qna');

  const user = useAuthStore((state) => state.user);
  const { data: qnaData, isLoading } = useQuery(['qna', id], () => getQna(id));

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const photoRef = useRef(null);
  const formRef = useRef(null);

  const [fileName, setFileName] = useState('');
  const [isTitleEditMode, setIsTitleEditMode] = useState(false);
  const [isTextEditMode, setIsTextEditMode] = useState(false);
  const [initialData, setInitialData] = useState(resetData);

  useEffect(() => {
    async function getQnaData() {
      try {
        const qna = await pb.collection('qna').getOne(id);
        const { title, text, img } = qna;

        // 초기 데이터 저장
        setInitialData({
          title,
          text,
          img: getPbImageURL(qna, 'img'),
        });
        titleRef.current.value = initialData.title;
        textRef.current.value = initialData.text;
        resetData.title = titleRef.current.value = title;
        resetData.text = textRef.current.value = text;
        resetData.img = photoRef.current.files = img;

        setFileName(getPbImageURL(qna, 'img'));
      } catch (error) {
        if (!(error in DOMException)) {
          console.error();
        }
      }
    }
    getQnaData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const text = textRef.current.value;
    const img = photoRef.current.files;

    const formData = new FormData();

    formData.append('title', title);
    formData.append('text', text);
    if (photoRef.current.files.length > 0) {
      formData.append('img', photoRef.current.files[0]);
    }

    if (!text || text.trim() === '') {
      toast.error('내용을 작성해주세요');
      return;
    }
    try {
      // const promise = updateQna(id, formData).then((updated) => {
      //   updateUser(userid, {
      //     qna: updated.id,
      //   });
      // });
      const promise = updateQna(id, formData);
      // const created = await createQna(formData);
      // await updateUser(id, {
      //   'qna+': created.id,
      // });
      toast.promise(promise, {
        loading: '반영 중...',
        success: () => {
          navigate('/mypage/myqna');
          return 'QnA가 수정되었습니다.';
        },
        error: '저장 불가합니다.',
      });
    } catch (error) {
      toast.error('저장 불가합니다.');
    }
  };

  const handleReset = () => {
    titleRef.current.value = initialData.title;
    textRef.current.value = initialData.text;
    setFileName(''); // 파일명 초기화
  };

  const handleUpload = async (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const fileImages = Array.from(files).map((file) => ({
        image: URL.createObjectURL(file),
        label: file.name,
      }));
      setFileName(fileImages[0].label);

      // 여기서 바로 파일 전송
      const formData = new FormData();
      formData.append('img', files[0]);

      // 서버에 파일 전송하는 코드...
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {isAuth && (
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
              onSubmit={handleUpdate}
            >
              <div className='flex w-full border-b-[1px] border-slate-400 py-1 text-sm sm:py-3 sm:text-base '>
                <p className='mr-4 font-semibold'>NAME</p>
                <p className='font-thin'>{user.username}</p>
              </div>
              <div className='flex w-full border-b-[1px] border-slate-400 py-1 text-sm sm:py-3 sm:text-base'>
                <p className='mr-4 font-semibold'>EMAIL</p>
                <p className='font-thin'>{user.email}</p>
              </div>

              <div className='flex w-full items-start justify-start border-slate-400 pt-2 sm:py-3'>
                <p className='mr-4 h-8 w-auto flex-shrink-0 flex-grow-0 text-lg font-semibold'>
                  제목
                </p>

                <input
                  type='text'
                  id='title'
                  readOnly={!isTitleEditMode}
                  ref={titleRef}
                  className='h-3 w-full rounded-2xl border-[1px] border-slate-400 p-3 sm:h-7'
                ></input>
              </div>
              <textarea
                name='qna'
                id='qna'
                readOnly={!isTextEditMode}
                ref={textRef}
                cols='30'
                rows='10'
                className='mb-auto h-full w-full flex-grow resize-none  rounded-2xl border-[1px] border-slate-400 p-3'
              ></textarea>
              <div className='flex w-full justify-between pt-2 sm:py-3'>
                <div className='flex items-end'>
                  <input
                    type='file'
                    id='photo'
                    ref={photoRef}
                    accept='*.jpg,*.png,*.jpeg,*.webp,*.avif'
                    onChange={handleUpload}
                    disabled={!isTextEditMode}
                    className={`hidden flex-shrink-0 ${isTextEditMode ? '' : 'disabled'}`}
                  />
                  <label
                    htmlFor='photo'
                    tabIndex='0'
                    className={`mr-2 flex-shrink-0 cursor-pointer rounded-md border-[1px] p-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md ${
                      isTextEditMode ? '' : 'disabled'
                    }`}
                  >
                    파일첨부
                  </label>
                  <div className='w-24 flex-shrink-0 overflow-hidden overflow-ellipsis whitespace-nowrap sm:w-32 md:w-56'>
                    {fileName || qnaData.img}
                  </div>
                </div>
                <div>
                  <button
                    type='button'
                    label='저장하기'
                    className='ml-auto mr-1 flex-shrink-0 rounded-md border-[1px] p-1 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md'
                    onClick={(e) => {
                      if (isTitleEditMode && isTextEditMode) {
                        handleUpdate(e); // 'e'를 인자로 넘겨줍니다.
                      } else {
                        setIsTitleEditMode(true); // 제목 입력 필드 편집 모드 활성화
                        setIsTextEditMode(true);
                      }
                    }}
                  >
                    {isTitleEditMode && isTextEditMode ? '저장' : '수정'}
                  </button>
                  <button
                    type='button'
                    label='취소하기'
                    onClick={handleReset}
                    className='ml-auto flex-shrink-0 rounded-md border-[1px] p-1 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-md'
                  >
                    취소
                  </button>
                </div>
              </div>
            </form>
            <Toaster
              toastOptions={{
                success: {
                  duration: 100,
                  style: {
                    background: '#5D6FFF',
                    color: 'white',
                  },
                },
                error: {
                  duration: 2000,
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

export default MyQnaDetailPage;
