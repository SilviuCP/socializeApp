import * as React from 'react';
import ReactDom from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { Profile } from './pages/profile/Profile';


export const client = new ApolloClient({
    link: createHttpLink({ uri: 'http://localhost:3000/graphql', credentials: "include"}),
    cache: new InMemoryCache(),
    
});

class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path="/" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </BrowserRouter>
            </ApolloProvider>
        )
    }
}
ReactDom.render(<App />, document.getElementById("app"));