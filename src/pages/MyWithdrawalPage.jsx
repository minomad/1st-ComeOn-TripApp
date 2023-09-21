import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useRef, useState, useEffect } from 'react';
import Input from '@/components/Input';
import Guest from '@/components/Guest';
import Header from '@/components/Header';
import Button from '@/components/Button';
import MyForm from '@/components/MyForm';
import MetaTag from '@/components/MetaTag';
import useAuthStore from '@/store/useAuthStore';

function MyWithdrawalPage() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);
  const { cancelMembership, signOut } = useAuthStore();
  const navigate = useNavigate();
  const userId = user.id;
  const passwordRef = useRef(null);
  const [quality, setQuality] = useState(null);
  const [reasons, setReasons] = useState([]);
  const [toastMessage, setToastMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [usageDuration, setUsageDuration] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const updateMessage = (newMessage) => {
    setToastMessage(newMessage);
  };

  useEffect(() => {
    if (usageDuration && quality && reasons.length > 0 && passwordConfirm.length >= 6) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [usageDuration, quality, reasons, passwordConfirm]);

  const handleRadioChange = (event) => {
    if (event.target.name === 'usageDuration') setUsageDuration(event.target.value);
    else if (event.target.name === 'quality') setQuality(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setReasons([...reasons, event.target.value]);
    } else {
      let updatedReasons = reasons.filter((reason) => reason !== event.target.value);
      setReasons(updatedReasons);
    }
  };

  const handlePasswordChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await cancelMembership(userId);
      toast.success('탈퇴가 완료되었습니다.');
      signOut();
      navigate('/');
    } catch (error) {
      alert('비밀번호가 잘못되었습니다.');
    }
  };
  console.log(user);

  return (
    <>
      <MetaTag title='탈퇴페이지' description='탈퇴페이지' />
      <Header
        search='search'
        back='back'
        cart='cart'
        title='탈퇴페이지'
        className='ml-10 text-xl font-semibold'
      ></Header>
      {!isAuth && <Guest></Guest>}
      {isAuth && (
        <>
          <section
            className='mx-auto mb-20 mt-0 w-[90%]
      flex-col rounded-3xl border-[1px] border-slate-300 p-6 text-sm shadow-lg sm:max-w-[500px] sm:text-base'
          >
            <article className='flex-shrink flex-grow whitespace-normal break-keep  border-b-[1px] border-slate-300 pb-2  text-center text-sm font-extralight sm:text-base'>
              안녕하세요.<span className='font-semibold'>{user.username} 회원님</span> 그 동안 저희
              <span className='font-semibold text-primary'> 야무지개 놀자</span> 를 이용해주셔서
              감사합니다. 탈퇴를 도와드리기 전 몇가지 선택지에 선택을 해주시면 서비스 개선에 적극
              반영하겠습니다.
            </article>

            <MyForm
              className='flex w-full  flex-shrink flex-grow flex-col items-center'
              onSubmit={handleSubmit}
            >
              <div className='flex w-full max-w-md flex-col gap-2'>
                <ul
                  role='group'
                  className='flex w-full max-w-md flex-col gap-2'
                  aria-required='true'
                >
                  <div className='pt-2'>이용 기간을 알려주세요.</div>
                  <li>
                    <Input
                      type='radio'
                      name='usageDuration'
                      label='1년 이상'
                      id='oneYearOrMore'
                      onChange={handleRadioChange}
                      className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                      labelClass='cursor-pointer'
                    />
                  </li>
                  <li>
                    <Input
                      type='radio'
                      name='usageDuration'
                      label='6개월 이상'
                      id='sixMonthsOrMore'
                      onChange={handleRadioChange}
                      className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                      labelClass='cursor-pointer'
                    />
                  </li>
                  <li>
                    <Input
                      type='radio'
                      name='usageDuration'
                      label='6개월 미만'
                      id='lessThanSixMonths'
                      onChange={handleRadioChange}
                      className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                      labelClass='cursor-pointer'
                    />
                  </li>
                </ul>

                <ul
                  role='group'
                  className='flex w-full max-w-md flex-col gap-2'
                  aria-required='true'
                >
                  <div className='border-t-[1px] border-slate-300 pt-2'>서비스품질은 어땠나요?</div>
                  <li>
                    <Input
                      type='radio'
                      name='quality'
                      label='매우 만족'
                      id='high'
                      onChange={handleRadioChange}
                      className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                      labelClass='cursor-pointer'
                    />
                  </li>
                  <li>
                    <Input
                      type='radio'
                      name='quality'
                      label='만족'
                      id='lessHigh'
                      onChange={handleRadioChange}
                      className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                      labelClass='cursor-pointer'
                    />
                  </li>
                  <li>
                    <Input
                      type='radio'
                      name='quality'
                      label='매우 불만족'
                      id='bad'
                      onChange={handleRadioChange}
                      className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                      labelClass='cursor-pointer'
                    />
                  </li>
                  <li>
                    <Input
                      type='radio'
                      name='quality'
                      label='불만족'
                      id='lessBad'
                      onChange={handleRadioChange}
                      className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                      labelClass='cursor-pointer'
                    />
                  </li>
                </ul>
                <ul
                  role='group'
                  className='flex w-full max-w-md flex-col gap-2'
                  aria-required='true'
                >
                  <div className='border-t-[1px] border-slate-300 pt-2 '>탈퇴사유를 알려주세요</div>
                  <li>
                    <Input
                      type='checkbox'
                      name='reasons'
                      label='UI/UX(불편한 사용경험)'
                      id='UX'
                      onChange={handleCheckboxChange}
                      className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                      labelClass='cursor-pointer'
                    />
                  </li>
                  <li>
                    <Input
                      type='checkbox'
                      label='다른 서비스(어플) 사용 예정'
                      id='service'
                      name='reasons'
                      onChange={handleCheckboxChange}
                      className="checkbox cursor-pointer appearance-none pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover before:bg-no-repeat 
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]"
                      labelClass='cursor-pointer'
                    />
                  </li>

                  <li>
                    <Input
                      type='checkbox'
                      label='기타(상담 연락 불편, 품질 등)'
                      id='all'
                      name='reasons'
                      onChange={handleCheckboxChange}
                      className="checkbox cursor-pointer appearance-none pb-2 pr-2 outline-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/signup-check.svg')] before:bg-cover 
                before:bg-no-repeat
                before:align-middle
                checked:before:bg-[url('/signup-agree.svg')]
                "
                      labelClass='cursor-pointer'
                    />
                  </li>
                </ul>
              </div>
              <div className='w-full border-t-[1px] border-slate-300 pt-3 '>
                😘 마지막 단계 - 비밀번호 검증
              </div>
              <div className='flex w-full max-w-md justify-center' aria-required='true'>
                <Input
                  inputRef={passwordRef}
                  type='password'
                  label='비밀번호 확인'
                  id='passwordConfirm'
                  placeholder='비밀번호 확인'
                  className='mb-4 mt-3 h-9 w-full border-b border-gray p-2 outline-primary'
                  labelClass='sr-only'
                  onChange={handlePasswordChange}
                />
              </div>

              <Button
                type='submit'
                className={`mb-18 w-full max-w-md rounded-lg border py-2 text-center font-light text-primary outline-primary ${
                  isFormValid ? 'bg-primary font-bold text-white ' : 'text-primary outline-primary'
                }`}
                onClick={() => updateMessage('탈퇴가 완료되었습니다.')}
                disabled={!isFormValid}
              >
                <div className='flex items-end justify-center'>
                  <p className='text-xs font-light text-slate-400'>안녕..</p>탈퇴하기
                </div>
              </Button>
              <div role='alert' aria-live='assertive' aria-atomic='true' className='sr-only'>
                {toastMessage}
              </div>
            </MyForm>
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
      )}
    </>
  );
}
export default MyWithdrawalPage;
