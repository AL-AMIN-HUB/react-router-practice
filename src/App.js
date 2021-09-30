import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Meal from "./components/Meal/Meal";
import NotFounds from "./components/NotFound/NotFound";
import Restaurants from "./components/Restaurants/Restaurants";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route exact path="/meal">
            <Header></Header>
            <Meal></Meal>
          </Route>
          <Route exact path="/restaurants">
            <Header></Header>
            <Restaurants></Restaurants>
          </Route>
          <Route exact path="*">
            <Header></Header>
            <NotFounds></NotFounds>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
