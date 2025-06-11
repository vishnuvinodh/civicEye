import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import S1 from './first/S1';
import Log from './first/Log';
import Reg from './first/Reg';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profi from './first/Profi';
import Firpage from './first/Firpage';
import Page from './first/Page';
import Repo from './first/Repo';
import Adp1 from './first/Adp1';
import Usercomplaints from './first/Usercomplaints';
import About from './first/About';
import Contact from './first/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>

    <Route path="/log" element={<Log></Log>}></Route>
    <Route path="/reg" element={<Reg></Reg>}></Route>
    <Route path="/profile" element={<Profi></Profi>}></Route>
    <Route path="/" element={<Firpage></Firpage>}></Route>
    <Route path="/page" element={<Page></Page>}></Route>
    <Route path="/report" element={<Repo></Repo>}></Route>
    <Route path="/admin/*" element={<Adp1></Adp1>}></Route>
     <Route path="/usercomp" element={<Usercomplaints></Usercomplaints>}></Route>
     <Route path="/about" element={<About></About>}></Route>
     <Route path="/contact" element={<Contact></Contact>}></Route>
   </Routes>
   
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
