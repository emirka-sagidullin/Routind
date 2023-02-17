import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Authorization from './components/Authorization/Authorization'
import Registration from './components/Registration/Registration'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Exit from './components/Exit/Exit'

function App() {
  const initUsers =  [
    {
      id: '1',
      login: 'user1@mail.com',
      password: 'Password1'
    },
    {
      id: '2',
      login: 'user2@mail.com',
      password: 'Password2'
    },
  ]
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [users, setUsers] = useState(initUsers)
  const [user, setUser] = useState({})
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/authorization' element={<Authorization users={users} setUser={setUser} isAuthorized={isAuthorized} setIsAuthorized={setIsAuthorized} />}/>
        <Route path='/registration' element={<Registration setUsers={setUsers} users={users} />}/>
        <Route path='/content' element={<Content user={user} isAuthorized={isAuthorized} />}/>
        <Route path='/exit' element={<Exit setUser={setUser} setIsAuthorized={setIsAuthorized}  />} />
      </Routes>
    </Router>
  );
}

export default App;
