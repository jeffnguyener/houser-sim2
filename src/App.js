import React from 'react';
import './App.css';
import routes from './routes'
import Header from './Components/Header'
import { HashRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <HashRouter>
        {routes}
        <Header />
      </HashRouter>
    </div>
  );
}

export default App;
