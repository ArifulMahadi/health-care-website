
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Details from './Details/Details/Details';
import Login from './Login/Login/Login';

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
           <Route path='/login'>
              <Login></Login>
           </Route>
           <Route path='/details/:serviceid'>
             <Details></Details>
           </Route>
           <Route path="*">
             <NotFound></NotFound>
           </Route>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
