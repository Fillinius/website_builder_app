import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@/shared/ui/const/router'
import { MainPage } from '@/pages/MainPage'
import { LoginPage } from '@/pages/LoginPage'
import { NavBar } from '@/widgets/NavBar/ui'

const HeaderLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: AppRoutes.MAIN,
        element: <MainPage />,
      },
      {
        path: AppRoutes.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
