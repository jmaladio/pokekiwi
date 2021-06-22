import { Switch, Route } from 'react-router-dom';

import { MainPage, DetailPage, Page404 } from './pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/pokemon/:string" component={DetailPage} />
      <Route component={Page404} />
    </Switch>
  )
}

export default Routes;