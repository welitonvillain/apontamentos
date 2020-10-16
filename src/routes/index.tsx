import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Login from '../pages/Login';
import CSV from '../pages/Csv';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/csv" component={CSV}/>
        </Switch>
    );
};

export default Routes;

