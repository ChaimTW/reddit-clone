import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

function Header({ setTopic }) {
    const [search, setSearch] = useState('');

    function handleTyping(e) {
        let queryString = e.target.value.replaceAll(" ", "%20")
        setSearch(`search.json?q=${queryString}`);
    }

    function executeSearchClick() {
        setTopic(search);
        if(window.location.pathname !== "/") {
            window.history.back();
        }  
    }

    function executeSearchEnter(e) {
        if(e.key === 'Enter') {
            setTopic(search);
            if(window.location.pathname !== "/") {
                window.history.back();
            }  
        }
    }

    return (
        <div className="header">
            <div className="logo">
                <img src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png" alt="reddit-logo"></img>
                <a href="/">
                <h3><span className="red-text">Reddit</span>Minimal</h3>
                </a>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" onChange={handleTyping} onKeyPress={executeSearchEnter}/>
                <SearchIcon onClick={executeSearchClick} />
            </div>
        </div>
    )
}

export default Header
