import React from 'react';
import logo from './logo.svg';
import './pagetwo.css';

function pagetwo() {
    return (
        <div className="pagetwo">
            <header className="pagetwo-header">
                <img src={logo} className="pagetwo-logo" alt="logo" />
                <p>
                    Ciężki orzech do zgryzienia jest to.
                </p>
                <p>
                    Chyba muszę się pouczyć reacta.
                </p>
                <a
                    className="pagetwo-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}
export default pagetwo();