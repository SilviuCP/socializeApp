import * as React from 'react';
import ReactDom from "react-dom";

class App extends React.Component {
    render() {
        return <div>
            1
        </div>;
    }
}
ReactDom.render(<App/>, document.getElementById("app"));