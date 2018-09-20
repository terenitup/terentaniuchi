import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import Contact from "./contact/contact";
import AboutMe from "./aboutMe";
import Portfolio from "./portfolio";

export default function() {
    return (
        <div>
    
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/aboutMe" component={AboutMe} />
                <Route exact path="/contact" component={Contact} />
            </Switch>

        </div>
    )
}