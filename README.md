# 1루와 야! 무지개 놀자~✈️

![배너](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/95375c34-6c3d-4974-99f9-a044fa3052e0)

배포 URL: [야! 무지개 놀자~](https://1st-come-on-trip-app.vercel.app)

프로젝트 기간 : 2023년 8월 29일 ~ 2023년 9월 24일  
<br/>

## 프로젝트 소개

YOUNG CHILLER들을 위한 청량한 여행앱!



<br/>

## 목차

1. 팀 소개
2. 역할 분담
3. 기술스택
4. 트리구조
5. 주요기능
6. 화면구성

<br/>

## 팀 소개

|                              강경민                              |                              김종윤                              |                             신명화                              |                              장효윤                              |
| :--------------------------------------------------------------: | :--------------------------------------------------------------: | :-------------------------------------------------------------: | :--------------------------------------------------------------: |
| ![캐릭터](https://avatars.githubusercontent.com/u/131448929?v=4) | ![캐릭터](https://avatars.githubusercontent.com/u/130979302?v=4) | ![캐릭터](https://avatars.githubusercontent.com/u/73214037?v=4) | ![캐릭터](https://avatars.githubusercontent.com/u/101866872?v=4) |
|            [Github 주소](https://github.com/minomad)             |            [Github 주소](https://github.com/whddbsl)             |         [Github 주소](https://github.com/MyoungHwaShin)         |             [Github 주소](https://github.com/HYHYJ)              |

<br/>

## 💻역할분담

|  이름  |                                         담당페이지                                          |
| :----: | :-----------------------------------------------------------------------------------------: |
| 강경민 |       메인 페이지, 호텔/숙소 페이지(상세,예약), 리뷰, 찜, 장바구니, 로그인, 회원가입        |
| 김종윤 |            레저/티켓 페이지(상세,예약), 교통 페이지(상세), 항공 페이지, 장바구니            |
| 신명화 |        마이 페이지(나의 예약,후기,회원정보), 1:1문의/채팅 페이지, 로그아웃, 회원탈퇴        |
| 장효윤 | 메인(배너), 지역 페이지(숙소리스트/위치지정지도), 내주변 페이지(숙소/레저 지도), 검색페이지 |

<br/>

## ⚒️기술스택

[![My Skills](https://skillicons.dev/icons?i=html,css,tailwind,javascript,react,vite,vercel,git,github,figma)](https://skillicons.dev)

![zustand](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/0f5f178b-381c-44de-8f5f-7ec6ce1045c9)
![react-query](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/3b6bfa41-463d-4c22-9b5f-4ca215b7c767)
![framer-motion](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/eca9548d-af1d-4de3-b5c3-2313c9cac184)
![pb](https://github.com/FRONTENDSCHOOL6/1st-ComeOn-TripApp/assets/131448929/75b04053-0d9f-42bb-b88c-b50b52c5e6f7)

## 📁파일트리

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

## 주요기능

🔒 로그인 / 회원가입

- 로그인
- 회원가입
- 유효성 검사
- 중복 검사

호텔 / 숙소


레저 / 티켓

교통 / 항공

지역

내주변

찜

장바구니

🔍 검색
👨🏿‍🤝‍👨🏼마이페이지

## 📱화면구성

## 💬프로젝트 소감

### ✈️ 강경민

### ✈️ 김종윤

### ✈️ 신명화

### ✈️ 장효윤
