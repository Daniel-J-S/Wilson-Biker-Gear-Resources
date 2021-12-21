import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Index from './pages/Index';

import { auth } from './services/firebase';

import './App.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

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
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/resources" render={() => {
         if(!user) {
           return <Redirect to="/" />;
         } else {
           return <Index />;
         }
       }}>
       </Route>
     </Switch>
    </>
  );
}

export default App;
