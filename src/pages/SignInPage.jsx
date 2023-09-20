import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { usePocketData } from '@/api/usePocketData';
import useAuthStore from '@/store/useAuthStore';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Form from '@/components/Form';
import MetaTag from '@/components/MetaTag';

function SignInPage() {
  const { passwordReset } = usePocketData('users');
  const { signIn } = useAuthStore();

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [isShowReset, setIsShowReset] = useState(false);

  const { mutate: userLogin } = useMutation(async (loginInfo) => {
    await signIn(loginInfo);
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const loginInfo = {
      email,
      password,
    };

    try {
      userLogin(loginInfo, {
        onSuccess: () => {
          toast.success('로그인 되었습니다.');
          setTimeout(() => {
            toast.dismiss();
            navigate('/');
          }, 1000);
        },
        onError: () => {
          toast.error('입력하신 내용을 확인해주세요.');
        },
      });
    } catch (error) {
      toast.error('서버 오류');
    }
  };

  const resetRef = useRef(null);

  const handleReset = () => {
    const reset = resetRef.current.value;
    passwordReset(reset);
    toast.success('이메일을 보냈습니다! 확인해 주세요.');
    setIsShowReset((prev) => !prev);
  };

  const handleShowReset = () => {
    setIsShowReset((prev) => !prev);
  };

  return (
    <>
      <MetaTag title='로그인' description='이메일 로그인' />
      <Header
        search='search'
        back='back'
        className='text-xl font-semibold'
        title='이메일로 로그인'
      />
      <section className='px-5 pt-20'>
        <h2 className='sr-only'>로그인 페이지</h2>
        <Form onSubmit={handleSignIn} className='flex flex-col items-center'>
          <Input
            inputRef={emailRef}
            label='이메일'
            type='text'
            id='email'
            placeholder='이메일'
            className='mb-8 h-9 w-full max-w-md border-b border-gray outline-primary'
            labelClass='sr-only'
          />
          <Input
            inputRef={passwordRef}
            label='비밀번호'
            type='password'
            id='password'
            placeholder='비밀번호 입력'
            className='mb-8 h-9 w-full max-w-md border-b border-gray outline-primary'
            labelClass='sr-only'
          />
          <div className='mb-2 flex gap-2'>
            <Button
              type='button'
              className='border-r px-4 hover:text-primary'
              onClick={handleShowReset}
            >
              비밀번호 찾기
            </Button>
            <Link className='px-1 hover:text-primary' to='/signup'>
              이메일로 회원가입
            </Link>
          </div>
          <Button
            type='submit'
            className='my-2 w-full max-w-md rounded-lg border py-2 text-center font-bold text-primary hover:bg-primary hover:text-white'
          >
            로그인
          </Button>
        </Form>
        {isShowReset && (
          <div className='fixed left-1/2 top-1/2 z-50 h-32 w-full max-w-md -translate-x-1/2 translate-y-1/2 rounded-lg shadow-md'>
            <span className='px-4 font-semibold'>비밀번호 찾기</span>
            <Input
              inputRef={resetRef}
              label='이메일'
              type='text'
              id='reset'
              placeholder='이메일'
              className='mt-5 h-9 w-full max-w-md border-b border-gray px-4 outline-primary'
              labelClass='sr-only'
            />
            <div className='flex justify-center pt-2.5'>
              <Button
                type='button'
                className='flex justify-center text-accent'
                onClick={handleReset}
              >
                이메일 보내기
              </Button>
            </div>
          </div>
        )}
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
  );
}
export default SignInPage;
