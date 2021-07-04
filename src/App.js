import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Users from './views/Users';
import About from './views/About';
import ManageUser from './views/ManageUser';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <div className="container-md container-fluid">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/new">
            <ManageUser title="New User" />
          </Route>
          <Route exact path="/edit">
            <ManageUser title="Edit User" />
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
