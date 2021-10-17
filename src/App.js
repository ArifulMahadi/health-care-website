
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Services from './components/Home/Services/Services';
import Header from './components/Home/Header/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
         <Switch>
           <Route exact path='/'>
              <Home></Home>
           </Route>
           <Route path='/home'>
              <Home></Home>
           </Route>
           <Route path='/services'>
              <Services></Services>
           </Route>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
