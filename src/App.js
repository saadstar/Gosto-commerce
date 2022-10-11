import './App.css';
import { NavBar } from './components/NavBar';
import {Route,Switch} from "react-router-dom"
import { Home } from './components/home/Home';
import { Footer } from './components/Footer';
import { DetailsPage } from './components/DetailsPage';
import { AboutUs } from './components/home/AboutUs';
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path="/cart/:id"><DetailsPage /></Route>
        <Route path="/about"><AboutUs /></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
