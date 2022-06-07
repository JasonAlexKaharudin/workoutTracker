import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import DashboardPage from './pages/DashboardPage';
import HistoryPage from './pages/HistoryPage';
import WorkoutsPage from './pages/WorkoutsPage';
import CreateWorkoutPage from './pages/CreateWorkoutPage';

import { Layout } from './layouts/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>    
    <Layout>
      <Routes>
          <Route path='/' element={<DashboardPage/>}/>
          <Route path='/workouts' element={<WorkoutsPage/>}/>
          <Route path='/history' element={<HistoryPage/>}/>
          <Route path='/create' element={<CreateWorkoutPage/>}/>                                 
      </Routes>    
    </Layout>
  </BrowserRouter>  
);