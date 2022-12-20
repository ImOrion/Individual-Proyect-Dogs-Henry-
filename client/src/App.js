import './App.css';
import { Route, Switch,useLocation } from "react-router";
import Welcome from './Components/Welcome/Welcome'; 
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Detail from "./Components/Detail/Detail"


function App() {
  const location = useLocation();
  return (
    <div className="App">

      {location.pathname === "/" ? null : <NavBar/>}
      <Switch>  
      <Route exact path="/"component={Welcome}/>
      <Route path="/home" component={Home}/>
      <Route path="detail/:id" component={<Detail />}/>
      </Switch>
      
    </div>
  );
}

export default App;
