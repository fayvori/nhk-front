import React, {useState} from "react"
import { RecoilRoot } from "recoil"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Catalog } from "./pages/Catalog"
import { Profile } from "./pages/Profile" 
import { History } from './pages/History'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
      path: "/catalog",
      element: <Catalog />
  },
  {
      path: "/profile",
      element: <Profile />
  },
  {
      path: "/history",
      element: <History />
  },
  {
      path: "*",
      element: <NotFound />
  }
]);

function App() {
  return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <RouterProvider routes={router} />
      </React.Suspense>
  );
}

export default App;
