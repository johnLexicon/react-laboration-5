import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import NewUser from './views/NewUser';
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
          <Route exact path="/new">
            <NewUser />
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
