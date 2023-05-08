import React from 'react';
import 'antd/dist/reset.css';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Home1 } from './components/Home1';
import { Home2 } from './components/Home2';
import { Home3 } from './components/Home3';
import { Home } from './components/Home';
import { Navigation } from './components/layout/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Home1/>}/>
        <Route path='/picture' element={<Home2/>}/>
      </Routes>
    </div>
  )
}

export default App