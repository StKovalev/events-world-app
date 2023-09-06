import React from 'react';
import './App.css';
// import Login from '../src/pages/login/login'
import {Counter, ProductCard, User, BlogPost, Post } from '../src/pages/test'
// import {UserContext} from './contexts/User'

// const User = {
//   role: 'user',
//   name: '',
// }

function App() {
  return (

        <div className="App">
          <header className="App-header">
            {/* <Counter /> */}
            {/* <ProductCard id={''}/> */}
            {/* <User /> */}
            {/* <BlogPost /> */}
            <Post />
          </header>
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