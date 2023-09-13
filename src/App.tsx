import React from 'react';
import { Link, NavLink, Routes, Route }  from 'react-router-dom';

import { About, Contacts, EventsCatalog, Main, NotFound } from './pages'
import { RequireAuth } from './hocs/requireAuth'

import './App.css';
// import Login from '../src/pages/login/login'
// import {Counter, ProductCard, User, BlogPost, Post } from '../src/pages/test'

// import {UserContext} from './contexts/User'

// const User = {
//   role: 'user',
//   name: '',
// }

const ROUTES = {
  main: '/',
  catalog: '/catalog',
  about: '/about',
  contacts: '/contacts',
}

function App() {

  // TODO : доработать стили навигации
  return (

        <div className="App">
          <header className="App-header1">
            <div>logo</div>
            <nav>
              <ul> 
                <li><NavLink to={ROUTES.main} style={({isActive}) => ({color: isActive ? "green" : "dark"})}>Главная</NavLink></li>
                <li><NavLink to={ROUTES.catalog} style={({isActive}) => ({color: isActive ? "green" : "dark"})}>Каталог событий</NavLink></li>
                <li><NavLink to={ROUTES.about} style={({isActive}) => ({color: isActive ? "green" : "dark"})}>О проекте</NavLink></li>
                <li><NavLink to={ROUTES.contacts} style={({isActive}) => ({color: isActive ? "green" : "dark"})}>Контакты</NavLink></li>
              </ul>
            </nav>
            <div>
              <span>login / logout</span>
              <span>IconIser</span>
            </div>
          </header>
          <main>
            <Routes>
              <Route path={ROUTES.main} element={<Main/>} /> 
              <Route path={ROUTES.catalog} element={
                <RequireAuth>
                  <EventsCatalog/>
                </RequireAuth>
              } />
              <Route path={ROUTES.about} element={<About/>} /> 
              <Route path={ROUTES.contacts} element={<Contacts/>} />
              <Route path='*' element={<NotFound/>} /> 
            </Routes>
          </main>
          <ul> 
            <li><Link to={ROUTES.main}>Главная</Link></li>
            <li><Link to={ROUTES.catalog}>Каталог событий</Link></li>
            <li><Link to={ROUTES.about}>О проекте</Link></li>
            <li><Link to={ROUTES.contacts}>Контакты</Link></li>
          </ul>
        </div>
  );
}

export default App;



// import logo from './logo.svg';
// {/* <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> */}


// {/* <div className='rootStyle'>
// <UserContext.Provider value={User}>
//   {/* <Login /> */}

// </UserContext.Provider>
// </div> */}