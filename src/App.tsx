import React from 'react';
import './App.css';
import { useCurrentPosition } from './geolocation/use-current-position';
import logo from './logo.svg';
import { Weather } from './weather/weather';

function App() {
    const { position, error } = useCurrentPosition();
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                    Learn React
                </a>
                {position && (
                    <p>
                        {position?.coords.latitude}, {position?.coords.longitude}
                    </p>
                )}
                {error && <p>{error.message}</p>}
                {position && <Weather position={position} />}
            </header>
        </div>
    );
}

export default App;
