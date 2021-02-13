import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.sass';
import { Banner } from './components/Banner';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Weathere } from './components/pages/Weathere';
import { TheBlackSwan } from './components/pages/TheBlackSwan';
import { ThothApi } from './components/pages/Thoth';
import { Contact } from './components/Contact/index';
import { About } from './components/About/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/weathere" component={Weathere} />
          <Route path="/the-black-swan" component={TheBlackSwan} />
          <Route path="/thoth-api" component={ThothApi} />
          <Route path="/">
            <Banner />
            <Projects />
            <About />
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
