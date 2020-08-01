import React from "react";
import { Switch, Route } from "react-router-dom";
import Data from "./Components/Data";
import Form from "./Components/Form";


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Form} />
            <Route exact path="/data" component={Data} />
        </Switch>
    );
}

export default Routes