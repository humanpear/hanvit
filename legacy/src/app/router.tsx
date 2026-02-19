import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

const MainPage = lazy(() => import('@/pages/main'))
const PortFolioPage = lazy(() => import('@/pages/portfolioMain'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'portfolio', element: <PortFolioPage /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
