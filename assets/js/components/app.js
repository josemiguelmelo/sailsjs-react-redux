import React, { Component } from 'react';
import cookie from 'react-cookie';
import LogoutButton from './auth/logoutButton';
import LoginButton from './auth/loginButton';

class App extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.render();
    }

    componentWillUpdate(nextProps) {
        this.render();
    }


    render() {
        var logoutButton;

        if (cookie.load('token')) {
            logoutButton = <LogoutButton />;
        } else {
            logoutButton = <LoginButton />;
        }
        return (
            <div>
                <p>Header here</p>
                { logoutButton }


                <div className="container">
                    {this.props.children}
                </div>

                <p>Footer here</p>
            </div>
        );
    }
}

export default App ;