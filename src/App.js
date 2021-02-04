import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.sass';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Weathere } from './components/pages/Weathere';
import { Contact } from './components/Contact/index';
import { About } from './components/About/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/weathere" component={Weathere} />
        <Route exact path="/">
          <Banner />
          <Projects />
          <About />
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
