import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';

import HomePage from './components/pages/home-page';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Dashboard from './components/dashboard';
import RequireAuth from './components/auth/require-auth';
import AlreadyAuth from './components/auth/already-auth';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="register" component={AlreadyAuth(Register)} />
        <Route path="login" component={AlreadyAuth(Login)} />
        <Route path="dashboard" component={RequireAuth(Dashboard)}  />

        <Route path="*" component={NotFoundPage} />
    </Route>
);