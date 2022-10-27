import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Catalog } from "./pages/Catalog"
import { Profile } from "./pages/Profile" 
import { History } from "./pages/History"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#F76C6C',
      contrastText: '#fff',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
