import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Form from '@/components/Form';

function SignInPage() {
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
        <Form className='flex flex-col items-center'>
          <Input
            label='이메일'
            type='text'
            id='email'
            placeholder='이메일'
            className='mb-8 h-9 w-full max-w-md border-b border-gray outline-primary'
          />
          <Input
            label='비밀번호'
            type='password'
            id='password'
            placeholder='비밀번호 입력'
            className='mb-8 h-9 w-full max-w-md border-b border-gray outline-primary'
          />
          <div className='mb-2 flex gap-2'>
            <Link className='border-r px-4'>비밀번호 찾기</Link>
            <Link className='px-1' to='/signup'>이메일로 회원가입</Link>
          </div>
          <Button
            type='submit'
            className='my-2 w-full max-w-md rounded-lg border py-2 text-center font-bold text-secondary'
          >
            로그인
          </Button>
        </Form>
      </section>
    </>
  );
}
export default SignInPage;
