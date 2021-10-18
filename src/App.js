
import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Details from './Details/Details/Details';
import Login from './Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Login/Login/PrivateRoute/PrivateRoute';
import About from './About/About';

function App() {
  return (
    <div>
     <AuthProvider>
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
           <Route path='/about'>
              <About></About>
           </Route>
           <PrivateRoute path='/details/:serviceid'>
             <Details></Details>
           </PrivateRoute>
           <Route path="*">
             <NotFound></NotFound>
           </Route>
         </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
