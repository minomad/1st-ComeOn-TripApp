import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Form from '@/components/Form';
import Button from '@/components/Button';
import Input from '@/components/Input';

function MyWithdrawalPage() {
  return (
    <>
      <Helmet>
        <title>야무지개놀자</title>
      </Helmet>
      <Header search='search' back='back' cart='cart' title='마이 페이지'>
        메인페이지
      </Header>
      <section
        className='mx-auto mb-20 mt-0 w-[90%]
      flex-col rounded-3xl border-[1px] border-slate-300 p-6 text-sm shadow-lg sm:max-w-[500px] sm:text-base'
      >
        <article className='flex-shrink flex-grow whitespace-normal break-keep  border-b-[1px] border-slate-300 pb-2  text-center text-sm font-extralight sm:text-base'>
          안녕하세요.<span className='font-semibold'>회원님</span> 그 동안 저희
          <span className='font-semibold'>야무지개 놀자</span> 를 이용해주셔서 감사합니다. 탈퇴를
          도와드리기 전 몇가지 선택지에 선택을 해주시면 서비스 개선에 적극 반영하겠습니다.
        </article>

        <Form className='flex w-full  flex-shrink flex-grow flex-col items-center'>
          <ul className='flex w-full max-w-md flex-col gap-2'>
            <div className='pt-2'>이용 기간을 알려주세요.</div>
            <li>
              <Input
                type='radio'
                name='usageDuration'
                label='1년 이상'
                id='oneYearOrMore'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>
            <li>
              <Input
                type='radio'
                name='usageDuration'
                label='6개월 이상'
                id='sixMonthsOrMore'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>
            <li>
              <Input
                type='radio'
                name='usageDuration'
                label='6개월 미만'
                id='lessThanSixMonths'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>

            <div className='border-t-[1px] border-slate-300 pt-2'>서비스품질은 어땠나요?</div>
            <li>
              <Input
                type='radio'
                name='quality'
                label='매우 만족'
                id='high'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>
            <li>
              <Input
                type='radio'
                name='quality'
                label='만족'
                id='lessHigh'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>
            <li>
              <Input
                type='radio'
                name='quality'
                label='매우 불만족'
                id='bad'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>
            <li>
              <Input
                type='radio'
                name='quality'
                label='불만족'
                id='lessBad'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>
            <div className='border-t-[1px] border-slate-300 pt-2 '>탈퇴사유를 알려주세요</div>
            <li>
              <Input
                type='checkbox'
                label='UI/UX(불편한 사용경험)'
                id='all'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>
            <li>
              <Input
                type='checkbox'
                label='다른 서비스(어플) 사용 예정'
                id='all'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>

            <li>
              <Input
                type='checkbox'
                label='기타(상담 연락 불편, 품질 등)'
                id='all'
                className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                labelClass='cursor-pointer'
                // onClick={handleAllAgree}
              />
            </li>
          </ul>
          <div className='w-full border-t-[1px] border-slate-300 pt-3 '>
            😘 마지막 단계 - 비밀번호 검증
          </div>
          <div className='flex w-full max-w-md justify-center'>
            <Input
              // inputRef={passwordConfirmRef}
              label='비밀번호 확인'
              // type={isShowPassword.passwordConfirm ? 'text' : 'password'}
              id='passwordConfirm'
              placeholder='비밀번호 확인'
              className='mb-4 mt-3 h-9 w-full border-b border-gray p-2 outline-primary'
              labelClass='sr-only'
            />
            <img
              // src={isShowPassword.passwordConfirm ? '/signup-open.svg' : '/signup-hide.svg'}
              // alt={isShowPassword.passwordConfirm ? '오픈' : '숨김'}
              className='absolute right-0 top-2'
              // onClick={() => handleShowPassword('passwordConfirm')}
            />
          </div>

          <Button
            type='submit'
            className='mb-18 w-full max-w-md rounded-lg border py-2 text-center font-bold text-primary outline-primary hover:bg-primary hover:text-white'
          >
            <div className='flex items-end justify-center'>
              <p className='text-xs font-light text-slate-400'>안녕..</p>탈퇴하기
            </div>
          </Button>
        </Form>
      </section>
    </>
  );
}
export default MyWithdrawalPage;
