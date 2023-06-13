import React from 'react';
import './App.css';

function App() {
    return (
        <div className="appWrapper">
            <header className='header'>
                <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
            </header>
            <nav className='nav'>
                <div>
                    <a> Profile </a>
                </div>
                <div>
                    <a> Messages </a>
                </div>
                <div>
                    <a> News </a>
                </div>
                <div>
                    <a> Music </a>
                </div>
                <div>
                    <a> Settings </a>
                </div>
            </nav>
            <div className='content'>
                Main Content
            </div>
        </div>
    );
}

export default App;
