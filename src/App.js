import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Header from "./components/header/Header";
import  DogsPage from "./containers/dogs-page/DogsPage";
import  CatsPage  from "./containers/cats-page/CatsPage";
import {Breeds} from "./containers/breeds/Breeds"

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/dog">
            <DogsPage />
          </Route>

          <Route exact path="/cat">
            <CatsPage />
          </Route>

          <Route exact path="/breed">
            <Breeds />
          </Route>

          <Redirect
            from="*"
            to={{
              pathname: "/",
            }}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
