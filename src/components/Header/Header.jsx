import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/authorization'>Войти</Link>
          </li>
            <li>
            <Link to='/registration'>Регистрация</Link>
            </li>
            <li>
            <Link to='/content'>Контент</Link>
            </li>
            <li>
            <Link to='/exit'>Выход</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
