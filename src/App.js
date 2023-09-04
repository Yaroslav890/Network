import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from './components/Dilogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () =>  {     
  return (
      <div className = 'app-wrapper'>
        <Header />
        <Nav />
        <div className = "app-wrapper-content">
          <Routes>
            <Route  path ='/content' element={ <Content />} />
            <Route  path = '/dialogs/' element={<DialogsContainer />} />
            <Route  path ='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div> 
    );
}

export default App;
