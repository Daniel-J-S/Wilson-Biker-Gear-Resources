import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Index from './pages/Index';

import { auth } from './services/firebase';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return () => {
      unsubscribe();
    }
  }, []);
  return (
    <>
     <Header user={user} />
       <Route exact path="/" render={() => {
          if(!user) {
            return <Home />
          } else {
            return <Index />;
          }
       }} />
    </>
  );
}

export default App;
