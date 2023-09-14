import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import RootLayout from './layout/RootLayout';

const MainPage = lazy(() => import('./pages/MainPage'));
const LocationPage = lazy(() => import('./pages/LocationPage'));
const LocationDetailPage = lazy(() => import('./pages/LocationDetailPage'));
const AroundPage = lazy(() => import('./pages/AroundPage'));
const WishPage = lazy(() => import('./pages/WishPage'));
const MyPage = lazy(() => import('./pages/MyPage'));
const MyBookingPage = lazy(() => import('./pages/MyBookingPage'));
const MyReviewPage = lazy(() => import('./pages/MyReviewPage'));
const MyChatPage = lazy(() => import('./pages/MyChatPage'));
const MyQnaPage = lazy(() => import('./pages/MyQnaPage'));
const MyInfoPage = lazy(() => import('./pages/MyInfoPage'));
const MyAuth = lazy(() => import('./pages/MyAuth'));
const MyNewQnaPage = lazy(() => import('./pages/MyNewQnaPage'));
const HotelPage = lazy(() => import('./pages/HotelPage'));
const HotelDetailPage = lazy(() => import('./pages/HotelDetailPage'));
const HotelRoomDetailPage = lazy(() => import('./pages/HotelRoomDetailPage'));
const AirlinePage = lazy(() => import('./pages/AirlinePage'));
const TrafficPage = lazy(() => import('./pages/TrafficPage'));
const TrafficTrainPage = lazy(() => import('./pages/TrafficTrainPage'));
const AppInstallPage = lazy(() => import('./pages/AppInstallPage'));
const LeisurePage = lazy(() => import('./pages/LeisurePage'));
const LeisureThemePage = lazy(() => import('./pages/LeisureThemePage'));
const LeisureBrandPage = lazy(() => import('./pages/LeisureBrandPage'));
const LeisureListPage = lazy(() => import('./pages/LeisureListPage'));
const LeisureDetailPage = lazy(() => import('./pages/LeisureDetailPage'));
const ExhibitionDetailPage = lazy(() => import('./pages/ExhibitionDetailPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const BookingPage = lazy(() => import('./pages/BookingPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'location', element: <LocationPage /> },
      { path: 'location/:category', element: <LocationDetailPage /> },
      { path: 'location/:category/hotel/:id', element: <HotelDetailPage /> },
      { path: 'around', element: <AroundPage /> },
      { path: 'around/hotel/:id', element: <HotelDetailPage /> },
      { path: 'around/LeisureDetail/:id', element: <LeisureDetailPage /> },
      { path: 'around/:latitude/:longitude', element: <AroundPage /> },
      { path: 'around/:latitude/:longitude/hotel/:id', element: <HotelDetailPage /> },
      { path: 'around/:latitude/:longitude/LeisureDetail/:id', element: <LeisureDetailPage /> },
      { path: 'wish', element: <WishPage /> },
      { path: 'myauth', element: <MyAuth /> },
      { path: 'mypage', element: <MyPage /> },
      { path: 'mypage/:id', element: <MyPage /> },
      { path: 'mypage/:id/mybooking', element: <MyBookingPage /> },
      { path: 'mypage/:id/myreview', element: <MyReviewPage /> },
      { path: 'mypage/:id/mychatroom', element: <MyChatPage /> },
      { path: 'mypage/:id/myinfo', element: <MyInfoPage /> },
      { path: 'mypage/:id/myqna', element: <MyQnaPage /> },
      { path: 'mypage/:id/myqna/mynewqna', element: <MyNewQnaPage /> },
      { path: 'hotel', element: <HotelPage /> },
      { path: 'hotel/:id', element: <HotelDetailPage /> },
      { path: 'rooms/:id/:hotel', element: <HotelRoomDetailPage /> },
      { path: 'airline', element: <AirlinePage /> },
      { path: 'traffic', element: <TrafficPage /> },
      { path: 'train', element: <TrafficTrainPage /> },
      { path: 'install', element: <AppInstallPage /> },
      { path: 'leisure', element: <LeisurePage /> },
      { path: 'leisure/:id', element: <LeisureThemePage /> },
      { path: 'leisurebrand/:id', element: <LeisureBrandPage /> },
      { path: 'LeisureListPage', element: <LeisureListPage /> },
      { path: 'LeisureDetail/:id', element: <LeisureDetailPage /> },
      { path: 'ExhibitionDetail/:id', element: <ExhibitionDetailPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'booking/:id/:title', element: <BookingPage /> },
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> },
    ],
  },
]);

export default router;
