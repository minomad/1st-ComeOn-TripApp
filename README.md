# 1루와 야! 무지개 놀자~✈️

![배너](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/95375c34-6c3d-4974-99f9-a044fa3052e0)

🔗배포 URL: [야! 무지개 놀자~](https://1st-come-on-trip-app.vercel.app)

📅프로젝트 기간 : 2023년 8월 29일 ~ 2023년 9월 24일  
<br/>

## ✈️프로젝트 소개

YOUNG CHILLER들을 위한 청량한 여행앱!

<br/>

## 🦁목차

1. [팀 소개](#🌈팀-소개)
2. [담당 페이지](#💻담당-페이지)
3. [기술 스택](#📚기술-스택)
4. [프로젝트 구조](#📁프로젝트-구조)
5. [화면 구성](#📱화면-구성)
6. [프로젝트 소감](#💬프로젝트-소감)

<br/>

## 🌈팀 소개

|                             🚌강경민                             |                             🐻김종윤                             |                            🎧️신명화                            |                             🐇장효윤                             |
| :--------------------------------------------------------------: | :--------------------------------------------------------------: | :-------------------------------------------------------------: | :--------------------------------------------------------------: |
| ![캐릭터](https://avatars.githubusercontent.com/u/131448929?v=4) | ![캐릭터](https://avatars.githubusercontent.com/u/130979302?v=4) | ![캐릭터](https://avatars.githubusercontent.com/u/73214037?v=4) | ![캐릭터](https://avatars.githubusercontent.com/u/101866872?v=4) |
|            [Github 주소](https://github.com/minomad)             |            [Github 주소](https://github.com/whddbsl)             |         [Github 주소](https://github.com/MyoungHwaShin)         |             [Github 주소](https://github.com/HYHYJ)              |

<br/>

## 💻담당 페이지

### 🚌강경민

- 🌈메인 페이지

  - 광고 배너 스와이퍼
  - 호텔 카테고리 리스트 렌더링

- 🏨호텔 / 숙소

  - 호텔 카테고리 리스트 렌더링
  - 호텔 상세정보 리스트 렌더링
  - 호텔 지도 api 호출
  - 숙소 상세정보 리스트 렌더링
  - 리뷰 CRUD

- 🔒로그인 / 회원가입

  - 유효성 검사
  - 아이디, 이메일, 닉네임 중복 검사
  - 인증 (로그인 회원만 찜, 예약, 장바구니, 마이페이지 이용 가능)

- ❤️찜

  - 찜한 호텔 / 레저 추가 및 삭제

- 🔖장바구니
  - 선택한 상품 삭제
  - 선택한 상품 결제
  - 선택한 상품 가격 표시

### 🐻김종윤

- 🎡레저 / 티켓

- 🚐교통 / 항공

- 🔖장바구니

### 🎧️신명화

- 👨🏿‍🤝‍👨🏼마이페이지
  - 나의 예약,후기
  - 회원정보
  - 1:1문의/채팅 페이지
  - 로그아웃
  - 회원탈퇴

### 🐇장효윤

- 🌏지역 페이지

- 🧭내주변 페이지

- 🔍검색 페이지

<br/>

## 📚기술 스택

[![My Skills](https://skillicons.dev/icons?i=html,css,tailwind,javascript,react,vite,vercel,git,github,figma)](https://skillicons.dev)
![zustand](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/0f5f178b-381c-44de-8f5f-7ec6ce1045c9)
![react-query](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/3b6bfa41-463d-4c22-9b5f-4ca215b7c767)
![framer-motion](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/eca9548d-af1d-4de3-b5c3-2313c9cac184)
![pb](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/75b04053-0d9f-42bb-b88c-b50b52c5e6f7)

<br/>

## 📁프로젝트 구조

<details>

```
📦src
 ├─📂api
 │  └📜usePocketData.js
 ├─📂components
 │  ├─📜AroundList.jsx
 │  ├─📜AroundMap.jsx
 │  ├─📜Button.jsx
 │  ├─📜CartController.jsx
 │  ├─📜Category.jsx
 │  ├─📜CustomDate.jsx
 │  ├─📜Entertainment.jsx
 │  ├─📜Exhibition.jsx
 │  ├─📜Form.jsx
 │  ├─📜Guest.jsx
 │  ├─📜Header.jsx
 │  ├─📜Hotel.jsx
 │  ├─📜HotelInfoCategory.jsx
 │  ├─📜HotelIntro.jsx
 │  ├─📜HotelList.jsx
 │  ├─📜HotelReviewEdit.jsx
 │  ├─📜HotelService.jsx
 │  ├─📜Input.jsx
 │  ├─📜Kakao.jsx
 │  ├─📜LeisureBrand.jsx
 │  ├─📜LeisureButton.jsx
 │  ├─📜LeisureCategory.jsx
 │  ├─📜LeisureInfoCategory.jsx
 │  ├─📜LeisureLink.jsx
 │  ├─📜LeisureProduct.jsx
 │  ├─📜LeisureProductInfo.jsx
 │  ├─📜LocationChoice.jsx
 │  ├─📜LocationMap.jsx
 │  ├─📜LocationSideButton.jsx
 │  ├─📜LocationSideButtonList.jsx
 │  ├─📜MetaTag.jsx
 │  ├─📜MyBasicButton.jsx
 │  ├─📜MyChatMessage.jsx
 │  ├─📜MyCircleProfile.jsx
 │  ├─📜MyForm.jsx
 │  ├─📜MyInput.jsx
 │  ├─📜MyList.jsx
 │  ├─📜MyNewQna.jsx
 │  ├─📜MyQnaTemplate.jsx
 │  ├─📜MySelecModal.jsx
 │  ├─📜NumberOfPeople.jsx
 │  ├─📜SearchFavorite.jsx
 │  ├─📜SearchHotel.jsx
 │  ├─📜SearchLeisure.jsx
 │  ├─📜SearchRecent.jsx
 │  ├─📜SearchResult.jsx
 │  ├─📜SearchTraffic.jsx
 │  ├─📜SelectModal.jsx
 │  ├─📜Spinner.jsx
 │  ├─📜TrafficCategory.jsx
 │  ├─📜TrafficReserveButton.jsx
 │  ├─📜WishCart.jsx
 │  └─📜WishList.jsx
 ├─📂Hook
 │  └─📜useStorage.js
 ├─📂layout
 │  ├─📜Navigation.jsx
 │  └─📜RootLayout.jsx
 ├─📂pages
 │  ├─📜AirlinePage.jsx
 │  ├─📜AppInstallPage.jsx
 │  ├─📜AroundPage.jsx
 │  ├─📜BookingPage.jsx
 │  ├─📜CartPage.jsx
 │  ├─📜ExhibitionDetailPage.jsx
 │  ├─📜FindPage.jsx
 │  ├─📜HotelDetailPage.jsx
 │  ├─📜HotelPage.jsx
 │  ├─📜HotelReviewPage.jsx
 │  ├─📜HotelRoomDetailPage.jsx
 │  ├─📜HotelRoomPage.jsx
 │  ├─📜LeisureBrandPage.jsx
 │  ├─📜LeisureDetailPage.jsx
 │  ├─📜LeisureListPage.jsx
 │  ├─📜LeisurePage.jsx
 │  ├─📜LeisureThemePage.jsx
 │  ├─📜LocationDetailPage.jsx
 │  ├─📜LocationPage.jsx
 │  ├─📜MainPage.jsx
 │  ├─📜MyBookingDetailPage.jsx
 │  ├─📜MyBookingPage.jsx
 │  ├─📜MyChatPage.jsx
 │  ├─📜MyInfoChangePage.jsx
 │  ├─📜MyInfoPage.jsx
 │  ├─📜MyNewQnaPage.jsx
 │  ├─📜MyPage.jsx
 │  ├─📜MyQnaDetailPage.jsx
 │  ├─📜MyQnaPage.jsx
 │  ├─📜MyReviewPage.jsx
 │  ├─📜MyWithdrawalPage.jsx
 │  ├─📜SearchDetailPage.jsx
 │  ├─📜SearchPage.jsx
 │  ├─📜SignInPage.jsx
 │  ├─📜SignUpPage.jsx
 │  ├─📜TrafficCarDetailPage.jsx
 │  ├─📜TrafficCarPage.jsx
 │  ├─📜TrafficDetailPage.jsx
 │  ├─📜TrafficPage.jsx
 │  ├─📜TrafficTrainPage.jsx
 │  └─📜WishPage.jsx
 ├─📂store
 │  ├─📜middleware.js
 │  ├─📜useAuthStore.js
 │  └─📜zustand.js
 ├─📂styles
 │  └─📜tailwind.css
 ├─📂utils
 │  ├─📜debounce.js
 │  ├─📜getPbImageURL.js
 │  ├─📜numberWithComma.js
 │  ├─📜regEx.js
 │  └─📜ScrollToTop.js
 ├─📜App.jsx
 ├─📜main.jsx
 └─📜routes.jsx
```

</details>

<br/>

## 📱화면 구성

### 메인페이지
| | | |
| :--------------------------------------------------------------: | :--------------------------------------------------------------: | :--------------------------------------------------------------: |
| ![mobile](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/d53679ab-e0b7-4008-a8bf-06f3834d6e67) | ![mobile (3)](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/51fe19d9-2306-4ddd-a2a8-83cc5d080049)| ![mobile (1)](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/1fc957e4-0903-43f7-854c-cc1921595551) |

### 



## 💬프로젝트 소감

### ✈️ 강경민

```
프로젝트를 통해서 혼자서는 경험할 수 없는 여러가지 상황들을 맞이하면서 많이 배울 수 있었고
프로젝트의 규모가 커지면서 컴포넌트 분리와 상태 관리의 중요성을 느낄 수 있는 프로젝트였습니다.
그리고 좋은 팀원들 덕분에 하고 싶었던 여행 테마의 프로젝트를 진행할 수 있었고 끝까지 완주한 1루와조 모두 감사합니다.
```

### ✈️ 김종윤

### ✈️ 신명화

```
멀게 느껴졌던 ERD와 리액트를 이해하고 쓸 수 있게 되었습니다.
컴포넌트 구조를 이해하는데에 도움이 되었습니다. 프로젝트로 파악한
부족한 부분을 채워나가 좋은 개발자로 성장하겠습니다.
마지막 프로젝트라는 부담에도 최선을 다 해준 팀원들에게 감사합니다 😍
```

### ✈️ 장효윤

```
이번 프로젝트를 통해 리액트의 장점과 수업에서 배운 내용들이 어떻게 쓰이는지 확실히
알게 되었습니다. 그리고 저희 1루와조 정말 감사드립니다. 어려운 내용을 척척 알려주시고 도와주신
갓민님, 꼼꼼하게 스크럼마스터를 해주시고  프로젝트에 엄청난 추진력을 주신 갓명화님,
빛의 속도로 프로젝트를 이끌어가신 갓종윤님 모두 감사합니당! 리액트 정말 힘들었는데
이번 프로젝트로 다시 마음 잡게 되었습니당✨❤️
```
