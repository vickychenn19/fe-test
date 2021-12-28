// import './App.css';
import {React} from 'react';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  function NotFound() {
    return <div style={{ paddingTop: '3rem' }}>Page Not Found 404</div>;
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/payment" element={<DetailPage/>} />
        <Route exact path="*" element={NotFound()} />
      </Routes>
    </BrowserRouter>
    </>
        
  );
  
}

export default App;

