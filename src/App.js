import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Header from "./components/header/Header";
import Home from "./containers/home/Home";
import DogsPage from "./containers/dogs-page/DogsPage";
import CatsPage from "./containers/cats-page/CatsPage";
import {Breeds} from "./containers/breeds/Breeds"
import BreedsList from "./components/breeds-list/BreedsList";

import "./App.scss";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>

                    <Route exact path="/dogs">
                        <DogsPage/>
                    </Route>

                    <Route exact path="/cats">
                        <CatsPage/>
                    </Route>

                    <Route exact path="/breeds">
                        <Breeds/>
                    </Route>

                    <Route exact path='/breeds/:breedId'>
                        <BreedsList/>
                    </Route>

                    {/*<Redirect from="*" to="/" exact/>*/}
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;




