import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function Nav() {

  const navStyle = {
      color: 'white'
  };
    
  return (
    <nav>
        <MusicNoteIcon></MusicNoteIcon>
        <h2>O Site Do Cara Lá</h2>
        <ul className="nav-links">
            <Link Link style={navStyle} to="/">
            <li>Home</li>
            </Link>
            <Link style={navStyle} to="/contato">
            <li>Contato</li>
            </Link>
            <Link style={navStyle} to="/mensagens">
            <li>Mensagens</li>
            </Link>
            <Link style={navStyle} to="/http://facebook.com/hahanysz">
            <li>Facebook</li>
            </Link>
            <Link style={navStyle} to="/estados">
            <li>Estados</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;