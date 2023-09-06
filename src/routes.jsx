import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from './layout/RootLayout';

const MainPage = lazy(() => import('./pages/MainPage'));
const HotelPage = lazy(() => import('./pages/HotelPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const AroundPage = lazy(() => import('./pages/AroundPage'));
const WishPage = lazy(() => import('./pages/WishPage'));
const MyPage = lazy(() => import('./pages/MyPage'));
const MyBookingPage = lazy(() => import('./pages/MyBookingPage'));
const MyReviewPage = lazy(() => import('./pages/MyReviewPage'));
const MyChatPage = lazy(() => import('./pages/MyChatPage'));
const LeisurePage = lazy(() => import('./pages/LeisurePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'hotel', element: <HotelPage /> },
      { path: 'location', element: <LocationPage /> },
      { path: 'around', element: <AroundPage /> },
      { path: 'wish', element: <WishPage /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'leisure', element: <LeisurePage /> },
    ],
  },
  {
    path: '/MyPage',
    element: <RootLayout />,
    children: [
      { path: 'mybooking', element: <MyBookingPage /> },
      { path: 'myreview', element: <MyReviewPage /> },
      { path: 'mychatroom', element: <MyChatPage /> },
    ],
  },
]);

export default router;
