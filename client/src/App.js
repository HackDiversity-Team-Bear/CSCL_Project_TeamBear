import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Constants
import * as actions from './actions';
import { routes } from './constants';

// Styles
import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Static/Stateless
import {
    NavBar,
    PageLayout,
} from './components';

// Pages
import {
    ItemInsert,
    ItemsList,
    ItemsTable,
    ItemUpdate,
    DonateABook,
    PickABook,
    ReturnABook
} from './pages';

class App extends Component {
    render() {

        const publicViews = (
            <Switch>
                <Route exact path={routes.HOME} component={PageLayout} />
                <Route exact path={routes.ITEMS} component={ItemsList} />
                <Route exact path={`${routes.ITEMS}/react-table-v6`} component={ItemsTable} />
                <Route exact path={routes.ITEM_INSERT} component={ItemInsert} />
                <Route exact path={routes.ITEM_UPDATE} component={ItemUpdate} />
                <Route exact path={routes.BOOK_ICONS} component={ItemsList} />


                <Route exact path={routes.DONATEABOOK} component={DonateABook} />
                <Route exact path={routes.PICKABOOK} component={PickABook} />
                <Route exact path={routes.RETURNABOOK} component={ReturnABook} />

            </Switch>
        );

        return (
            <Router>
                <CssBaseline />
                <NavBar />
                <div className="app--main">
                   
                    <div className="view-container">
                        {publicViews}
                    </div>
                </div>
            </Router>
        );
    };
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
