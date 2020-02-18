import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from '../routes/config.json';

const getRenderingComponent = (props, component: string) => {
    switch (component) {
        case 'Main':
            return 'Main';
        case 'Different':
            return 'Different';
        default:
            return null;
    }
};

const PageBuilder = ({}) => {
    return (
        <Router>
            <Switch>
                {routes.map(({ id, component, url, exact }) => (
                    <Route
                        key={id}
                        path={url}
                        exact={exact}
                        render={props =>
                            getRenderingComponent(props, component)
                        }
                    />
                ))}
            </Switch>
        </Router>
    );
};

export { PageBuilder };
