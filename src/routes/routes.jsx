import { Switch, Route } from "react-router-dom";
import { Home } from "../page/Home";
import { Menu } from "../page/Menu";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/menu" exact>
        <Menu />
      </Route>
    </Switch>
  );
};
