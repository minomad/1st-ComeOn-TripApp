import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from './layout/RootLayout';

const MainPage = lazy(() => import('./pages/MainPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const AroundPage = lazy(() => import('./pages/AroundPage'));
const WishPage = lazy(() => import('./pages/WishPage'));
const MyPage = lazy(() => import('./pages/MyPage'));
const MyBookingPage = lazy(() => import('./pages/MyBookingPage'));
const MyReviewPage = lazy(() => import('./pages/MyReviewPage'));
const MyChatPage = lazy(() => import('./pages/MyChatPage'));
const MyBookingPage = lazy(() => import('./pages/MyBookingPage'));
const MyReviewPage = lazy(() => import('./pages/MyReviewPage'));
const MyChatPage = lazy(() => import('./pages/MyChatPage'));
const MyInfoPage = lazy(() => import('./pages/MyInfoPage'));
const MyQnaPage = lazy(() => import('./pages/MyQnaPage'));
const HotelPage = lazy(() => import('./pages/HotelPage'));
const HotelDetailPage = lazy(() => import('./pages/HotelDetailPage'));
const LeisurePage = lazy(() => import('./pages/LeisurePage'));
const LeisureThemePage = lazy(() => import('./pages/LeisureThemePage'));
const LeisureBrandPage = lazy(() => import('./pages/LeisureBrandPage'));
const LeisureListPage = lazy(() => import('./pages/LeisureListPage'));
const LeisureDetailPage = lazy(() => import('./pages/LeisureDetailPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'location', element: <LocationPage /> },
      { path: 'around', element: <AroundPage /> },
      { path: 'wish', element: <WishPage /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'mybooking', element: <MyBookingPage /> },
      { path: 'myreview', element: <MyReviewPage /> },
      { path: 'mychatroom', element: <MyChatPage /> },
      { path: 'hotel', element: <HotelPage /> },
      { path: 'hotel/:id', element: <HotelDetailPage /> },
      { path: 'leisure', element: <LeisurePage /> },
      { path: 'leisure/:id', element: <LeisureThemePage /> },
      { path: 'leisurebrand/:id', element: <LeisureBrandPage /> },
      { path: 'LeisureListPage', element: <LeisureListPage /> },
      { path: 'LeisureDetail/:id', element: <LeisureDetailPage /> },
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'leisure', element: <LeisurePage /> },
      { path: 'leisure/:id', element: <LeisureThemePage /> },
    ],
  },
  {
    path: '/MyPage',
    element: <RootLayout />,
    children: [
      { path: 'mybooking', element: <MyBookingPage /> },
      { path: 'myreview', element: <MyReviewPage /> },
      { path: 'mychatroom', element: <MyChatPage /> },
      { path: 'myinfo', element: <MyInfoPage /> },
      { path: 'myqna', element: <MyQnaPage /> },
    ],
  },
]);

export default router;
