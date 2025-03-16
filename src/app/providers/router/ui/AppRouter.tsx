import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { AppRoutes } from "@/shared/ui/const/router";
import { MainPage } from "@/pages/MainPage";
import { LoginPage } from "@/pages/LoginPage";

const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <MainPage />,
  },
  {
    path:AppRoutes.LOGIN,
    element: <LoginPage/>
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
