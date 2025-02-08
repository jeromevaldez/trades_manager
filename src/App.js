import React, { useState } from 'react';
import Login from './Login';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Welcome to the Trades Manager App</h1>
                    <p>This is to prove we can load up an initial page upon login.</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;