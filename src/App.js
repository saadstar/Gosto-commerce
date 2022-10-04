import './App.css';
import { NavBar } from './components/NavBar';
import {Route,Switch} from "react-router-dom"
import { Home } from './components/home/Home';
import { Footer } from './components/Footer';
import { DetailsPage } from './components/DetailsPage';
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path="/cart/:id"><DetailsPage /></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
