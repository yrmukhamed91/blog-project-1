import React from "react";
import { Link } from 'react-router-dom'
import './header.css'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { logout } from '../../redux/userSlice'

const Header = () => {
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  // Если пользователь еще не вошел, то user == false
  // Если пользователь вошел, то user == true
  return (
    <header>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/create">Создать пост</Link>
        { user ?  (
          <>
        <Link to="/profile/">{user?.login}</Link>
        <button onClick={() => dispatch(logout())}>Выйти</button>
          </>
        ) : (
          <>
          <Link to="/register">Регистрация</Link>
          <Link to="/login">Логин</Link>
          </>
        ) }
        
       
      </nav>
    </header>
  );
};

export default Header;
