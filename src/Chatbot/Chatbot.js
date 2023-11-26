import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'


const Chatbot = ({ onCompleteChat, onSetDate, onSetName, onSetAge }) => {
  const [botMessages, setBotMessages] = useState([
    'Hello, Welcome to student info system!',
    'Pick a slot!',
    'Enter your Name',
    'Enter your Age (18-40)',
  ]);
  const [userMessages, setUserMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedAge, setSelectedAge] = useState('');

  useEffect(() => {
    const botTyping = setTimeout(() => {
      if (currentStep < botMessages.length) {
        setUserMessages((prevMessages) => [
          ...prevMessages,
          botMessages[currentStep],
        ]);
        setCurrentStep((prevStep) => prevStep + 1);
      } else {
        // Exit chat after completion
        onCompleteChat();
      }
    }, 3000);

    return () => clearTimeout(botTyping);
  }, [currentStep, botMessages, onCompleteChat]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim() !== '') {
      setUserMessages((prevMessages) => [...prevMessages, inputValue]);
      switch (currentStep) {
        case 2:
          onSetName(inputValue);
          break;
        case 3:
          if (parseInt(inputValue) >= 18 && parseInt(inputValue) <= 40) {
            onSetAge(inputValue);
          } else {
            setUserMessages((prevMessages) => [
              ...prevMessages,
              'Please enter a valid age between 18 and 40.',
            ]);
            return;
          }
          break;
        default:
          break;
      }
      setInputValue('');
      setShowInput(false);
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setShowOptions(true); // Show time slots
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    setShowOptions(false);
    setCurrentStep((prevStep) => prevStep + 1);
    onSetDate(`${selectedDate}, ${selectedTime}`);
  };

 

 


  return (
    <div>
      {userMessages.map((message, index) => (
        <div key={index}>
          <span>Bot: {message}</span>
        </div>
      ))}
      {showInput && (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here..."
          />
          <button onClick={handleInputSubmit}>Send</button>
        </div>
      )}
      {showOptions && (
        <div>
          {/* Display date and time options */}
          {/* For example, you can use a calendar and time picker */}
          {/* Implement functions to handle date and time selection */}
        </div>
      )}
    </div>
  );
};

export default Chatbot;

