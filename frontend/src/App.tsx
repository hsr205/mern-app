import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";

function App() {

    let [counter, setCounter] = React.useState(0);

    function incrementCounter(): void {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hello from React App!
                </p>

                <Button onClick={() => incrementCounter()}>
                    Click Count: {counter}
                </Button>
            </header>
        </div>
    );
}

export default App;
