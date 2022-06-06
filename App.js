
import Home from "./components/pages/home/Home";
import Sidebar from "./components/topbar/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import UserList from "./components/pages/home/userList/UserList";


function App() {
  return (
    <Router>
    <div> 
      <Topbar /> 
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
           <Home/> 
          </Route>
          <Route path="/users">
           <UserList/> 
          </Route>
        </Switch>
        
      </div> 
    </div>
    </Router>
  );
}

export default App;
 