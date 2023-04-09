import React, { lazy, Suspense } from 'react'

import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound'
import { Loading } from './components/Loading';

const Home = lazy(() => import('./pages/Home'))
const ShowInfo = lazy(() => import('./pages/ShowInfo'))

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<ShowInfo />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}
