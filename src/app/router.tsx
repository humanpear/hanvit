import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

const MainPage = lazy(() => import('@/pages/main'))
const AboutPage = lazy(() => import('@/pages/about'))
const PortFolioPage = lazy(() => import('@/pages/portfolio'))
const ProcessPage = lazy(() => import('@/pages/process'))
const ContactUsPage = lazy(() => import('@/pages/contactUs'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'portfolio', element: <PortFolioPage /> },
      { path: 'process', element: <ProcessPage /> },
      { path: 'contactUs', element: <ContactUsPage /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
