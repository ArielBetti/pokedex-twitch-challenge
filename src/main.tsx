import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

// global css
import './globals.css';

// app
import App from './App'

// react-query: client
const queryClient = new QueryClient();

// ::
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='mx-auto container px-4 py-10'>
        <App />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
