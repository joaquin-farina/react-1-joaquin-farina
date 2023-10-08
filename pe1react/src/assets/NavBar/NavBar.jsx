import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>Saga Comics</h1>

        <nav>
            <ul>
                <li>Comics</li>
                <li>Mangas</li>
                <li>Figuras</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar