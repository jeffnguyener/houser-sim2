import React from 'react';
import {Switch, Route} from 'react-router-dom';
import House from './Components/House'

export default (
    <Switch>
        <Route path='/house' component={House} />
    </Switch>
);
