import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import Router from './Routes/Route';
import AuthProvider from './Provider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ThemeProvider from './Provider/ThemeProvider';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className='max-w-screen-lg mx-auto'>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={Router} />
          </AuthProvider>
        </QueryClientProvider>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
)
