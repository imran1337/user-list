import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import AddUser from "./Components/Users/AddUser/AddUser";
import EditUser from './Components/Users/EditUser/EditUser';
import ViewUser from './Components/Users/ViewUser/ViewUser';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/add" component={AddUser} />
        <Route exact path="/user/:userId" component={ViewUser} />
        <Route exact path="/user/edit/:id" component={EditUser} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
