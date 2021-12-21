import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Index from './pages/Index';
import Admin from './pages/Admin';

import { auth } from './services/firebase';

import './App.css';

function App() {

  const [userState, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        user.isAdmin = user.email.split('@')[0] === 'admin';
      }
      setUser(user);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <>
     <Header user={userState} />
      <Switch>
        <Route exact path="/" render={() => {
            if(!userState) {
              return <Home />;
            } else {
              return <Index />;
            }
        }} />
      <Route exact path="/admin" render={() => {
        if(userState && userState.isAdmin) {
          return <Admin />;
        } else {
          return <Redirect to="/" />;
        }
      }} />
      </Switch>
    </>
  );
}

export default App;
