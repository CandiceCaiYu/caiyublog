import React from 'react';
import avator from './assets/images/avator.png';
import './App.css';
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avator} className="App-logo" alt="logo" />
        <p>
          myBlog
        </p>
      </header>
    </div>
  );
}

export default App;
