import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "./components/header/Header";
import { DogsPage } from "./containers/dogs-page/DogsPage";
import { CatsPage } from "./containers/cats-page/CatsPage";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/dog">
          <DogsPage />
        </Route>

        <Route exact path="/cat">
          <CatsPage />
        </Route>

        <Redirect
          from="*"
          to={{
            pathname: "/",
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
