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
      path: "*",
      element: <NotFound />
  }
]);

function App() {
  return (
    <div className="App">
        <React.Suspense fallback={<div>Loading...</div>}>
        <RecoilRoot>
            <RouterProvider routes={router} />
        </RecoilRoot>
      </React.Suspense>
    </div>
  );
}

export default App;
