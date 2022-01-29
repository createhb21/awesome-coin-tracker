import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coin from '../pages/Coin';
import Coins from '../pages/Coins';
import Portfolio from '../pages/Portfolio';

export type RouterProps = {};

function Router({}: RouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Coins />
        </Route>
        <Route path="/coins/:coinId">
          <Coin />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
