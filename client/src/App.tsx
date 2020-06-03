import * as React from 'react';
import ReactDom from "react-dom";
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider, useLazyQuery } from 'react-apollo';
import { Profile } from './pages/profile/Profile';
import { Feed } from './pages/feed/Feed';
import { Friends } from './pages/friends/Friends';
import { gql } from 'apollo-boost';
import { User } from './models/User';
import { useState } from 'react';


export const client = new ApolloClient({
    link: createHttpLink({ uri: 'http://localhost:3000/graphql', credentials: "include" }),
    cache: new InMemoryCache(),

});

const me = gql`query {
    me
  }`

const Router = () => {
    const [getMe, { loading, data }] = useLazyQuery(me);
    const [meState, setMe] = useState();
    React.useEffect(() => {
        if (!loading && data) {
            setMe(data.me);
        }
    }, [data])
    React.useEffect(() => {
        getMe();
    }, [])
    return <Switch>
        {/* {data?.me == true && <Route path="/profile" component={Profile} />}
        {data?.me == true && <Route path="/feed" component={Feed} />}
        {data?.me == true && <Route path="/friends" component={Friends} />} */}

        {!loading && data != undefined && meState == true && <Route path="/profile" component={Profile} />}
        {!loading && data != undefined && meState == true && <Route path="/feed" component={Feed} />}
        {!loading && data != undefined && meState == true && <Route path="/friends" component={Friends} />}
        {!loading && data != undefined && meState == false && <Redirect to={Login}/>}
        </Switch>
}

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={Login} />
                    <Route path="/register" component={Register} />
                    <Router />
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    )
}

ReactDom.render(<App />, document.getElementById("app"));