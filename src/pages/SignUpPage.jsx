import { Helmet } from 'react-helmet-async';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import Form from '@/components/Form';

function SignUpPage() {
  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <Header search='search' back='back' className='text-xl font-semibold' title='회원가입' />
      <section className='px-5 pt-20'>
        <h2 className='sr-only'>회원가입 페이지</h2>
        <Form encType='multipart/form-data' className='flex flex-col items-center'>
          <Input
            label='id'
            type='text'
            id='id'
            placeholder='아이디'
            className='mb-8 h-9 w-full max-w-md border-b border-gray p-2 outline-primary'
          />
          <Input
            label='이메일'
            type='text'
            id='email'
            placeholder='이메일'
            className='mb-8 h-9 w-full max-w-md border-b border-gray p-2 outline-primary'
          />
          <Input
            label='닉네임'
            type='text'
            id='nickName'
            placeholder='닉네임'
            className='mb-8 h-9 w-full max-w-md border-b border-gray p-2 outline-primary'
          />
          <Input
            label='비밀번호'
            type='password'
            id='password'
            placeholder='비밀번호 입력'
            className='mb-8 h-9 w-full max-w-md border-b border-gray p-2 outline-primary'
          />
          <Input
            label='비밀번호'
            type='password'
            id='passwordConfirm'
            placeholder='비밀번호 확인'
            className='mb-8 h-9 w-full max-w-md border-b border-gray p-2 outline-primary'
          />
          <div className='flex justify-between'>
            <p className='text-left'>프로필 사진</p>
            <div className='relative'>
              <label htmlFor='img' className='sr-only'>
                사진
              </label>
              <input
                type='file'
                name='img'
                id='img'
                accept='*.jpg,*.png,*.webp,*.avif'
                className='absolute h-full w-full cursor-pointer opacity-0'
                multiple
              />
              <div className='rounded-2xl border px-2 font-semibold text-primary'>
                파일선택
                <img
                  // ref={uploadImgRef}
                  src=''
                  alt=''
                />
              </div>
            </div>
          </div>
          <Button
            type='submit'
            className='my-4 w-full max-w-md rounded-lg border py-2 text-center font-bold text-secondary'
          >
            회원가입
          </Button>
        </Form>
      </section>
    </>
  );
}
export default SignUpPage;
