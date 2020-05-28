import * as React from 'react';
import ReactDom from "react-dom";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Login } from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                    
            </Switch>
            </BrowserRouter>
        )
    }
}
ReactDom.render(<App/>, document.getElementById("app"));