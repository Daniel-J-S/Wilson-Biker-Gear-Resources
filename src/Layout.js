import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Index from './pages/Index';

import './App.css';

function App() {
  return (
    <>
     <Header />
     <Switch>
       <Route exact path="/">
         <Home />
       </Route>
       <Route exact path="/resources">
         <Index />
       </Route>
     </Switch>
    </>
  );
}

export default App;
