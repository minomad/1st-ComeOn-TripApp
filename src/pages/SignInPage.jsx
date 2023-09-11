import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { usePocketData } from '@/api/usePocketData';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Form from '@/components/Form';

function SignInPage() {
  const { signIn } = usePocketData('users');
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { mutate: signInMutate } = useMutation(async (loginInfo) => {
    await signIn(loginInfo);
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const loginInfo = {
      email,
      password,
    };

    try {
      signInMutate(loginInfo, {
        onSuccess: () => {
          toast.success('로그인 성공');
          navigate('/');
        },
        onError: () => {
          toast.error('입력하신 내용을 확인해주세요');
        },
      });
    } catch (error) {
      console.error('서버 에러');
    }
  };

  return (
    <>
      <Helmet>
        <title>로그인 페이지</title>
      </Helmet>
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
            <Link className='border-r px-4'>비밀번호 찾기</Link>
            <Link className='px-1' to='/signup'>
              이메일로 회원가입
            </Link>
          </div>
          <Button
            type='submit'
            className='my-2 w-full max-w-md rounded-lg border py-2 text-center font-bold text-secondary hover:text-primary'
          >
            로그인
          </Button>
        </Form>
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
