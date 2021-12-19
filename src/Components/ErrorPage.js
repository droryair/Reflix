import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ErrorPage extends Component {
    render() {
        return (
            <div>
                <h1>Error 404: Page not found</h1>
                <Link to='/'>Back to home page</Link>
            </div>
        )
    }
}

export default ErrorPage;