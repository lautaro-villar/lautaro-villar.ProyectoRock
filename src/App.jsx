import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes/appRoutes';

function App() {
  return (
    <Router>
      <div className="app">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

