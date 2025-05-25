import type { RouteObject } from 'react-router-dom';
import StartPage from './page/StartPage';
import AddPage from './page/AddPage';
import IsPrimePage from './page/IsPrimePage';
import FizzBuzzPage from './page/FizzBuzzPage';
import MockMonthPage from './page/MockMonthPage';
import AsynchronousPage from './page/AsynchronousPage';
import MockApiResponsePage from './page/MockApiResponsePage';
import NotFoundPage from './page/NotFoundPage';
import AppendixPage from './page/AppendixPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/add',
    element: <AddPage />,
  },
  {
    path: '/isPrime',
    element: <IsPrimePage />,
  },
  {
    path: '/fizzbuzz',
    element: <FizzBuzzPage />,
  },
  {
    path: '/mockMonth',
    element: <MockMonthPage />,
  },
  {
    path: '/asynchronous',
    element: <AsynchronousPage />,
  },
  {
    path: '/mockApiResponse',
    element: <MockApiResponsePage />,
  },
  {
    path: '/404',
    element: <NotFoundPage />,
  },
  {
    path: '/appendix',
    element: <AppendixPage />,
  },
];

export default routes;
