import './App.css';
import { Route, Switch,useLocation } from "react-router";
import Welcome from './Components/Welcome/Welcome'; 
import Home from './Components/Home/Home';
import Detail from './Components/Detail/Detail';
import CreateDog from './Components/CreateDog/CreateDog';

function App() {
  const location = useLocation();
  return (
    <div className="App">

      {/* {location.pathname === "/" ? null : <NavBar/>} */}
      <Switch>  
      <Route exact path="/"component={Welcome}/>
      <Route path="/home" component={Home}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/createDog" component={CreateDog}/>
      </Switch>
    </div>
  );
}

export default App;
