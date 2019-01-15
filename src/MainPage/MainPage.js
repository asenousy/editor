import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import { withRouter } from 'react-router'
import styles from './MainPage.module.css';
import editors from '../Editors';

const lts = Object.keys(editors).reduce((latest, version) => Math.max(latest, version).toFixed(1), 0);

class MainPage extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          {Object.keys(editors).map(version =>
            <NavLink
              key={`nav-${version}`}
              className="nav-item nav-link"
              to={`/${version}`}
              activeClassName={styles.selected}>
              V{version}
            </NavLink>)}
        </nav>
        <Switch>
          {Object.entries(editors).map(([version, editor]) =>
            <Route
              key={`route-${version}`}
              path={`/${version}`}
              component={editor}
            />)}
          <Route component={() => <Redirect to={`/${lts}`} />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(MainPage);
