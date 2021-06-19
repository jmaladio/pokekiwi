import { Switch, Route } from 'react-router-dom';

import { Home, Page404 } from './pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  )
}

export default Routes;