import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './components/HomePage'
import Chatbot from './Chatbot/Chatbot';
import ConfirmationPage from './ConfirmationPage/ConfirmationPage';


function App() {
    return (
        <div>
            <HomePage/>
            <Chatbot/>
            <ConfirmationPage/>
            
            
        </div>
    );

    
}

export default App;