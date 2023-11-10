import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import FifthPage from "./pages/FifthPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
  {
    path: "/third-page",
    element: <ThirdPage />,
  },
  {
    path: "/fourth-page",
    element: <FourthPage />,
  },
  {
    path: "/fifth-page",
    element: <FifthPage />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
