import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

class LogoutButton extends Component {

    constructor(props) {
        super(props);
    }

    logout(props)
    {
        this.props.logoutUser();
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.logout.bind(this)}>Logout</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        message: state.auth.message
    };
}

export default connect(mapStateToProps, { logoutUser })(LogoutButton);