import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

class LoginButton extends Component {

    render() {
        return (
            <div>
                <a href="/login">Login</a>
            </div>
        );
    }
}


export default LoginButton;