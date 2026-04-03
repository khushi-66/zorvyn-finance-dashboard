import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './components/Dashboard.jsx';
import Transaction from './components/Transaction.jsx';
import Insights from './components/Insights.jsx';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
const router=createBrowserRouter(
       createRoutesFromElements(
        
         <Route path='/' element={<App/>}>
         <Route path='/transaction' element={<Transaction/>}/>
         <Route path='/insights' element={<Insights/>} />
         <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
       )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
     </StrictMode>,
)
