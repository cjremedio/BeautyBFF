import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Watch from './watch';
import Shop from './shop';
import AboutUs from './aboutus';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/watch" component={Watch} />
    <Route path="/shop" component={Shop} />
    <Route path="/aboutus" component={AboutUs} />
  </Switch>

)

export default Main;
