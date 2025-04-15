import HerosView from "./components/Heros/HerosView";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const route = createBrowserRouter([
    {
      path: "/cubic1",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route}>
        <Outlet />
      </RouterProvider>
    </>
  );
}

export default App;
