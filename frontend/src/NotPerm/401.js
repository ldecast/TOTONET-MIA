import React from 'react';
import { Link } from 'react-router-dom';
import './401.css'

class UnauthorizedPage extends React.Component {
    render() {
        return (<div className="notfound">
            <h1 id="title">401</h1>
            <h1 id="text">Unauthorized</h1>
            <p>
                <Link to="/Home">Go to Home</Link>
            </p>
        </div>);
    }
} export default UnauthorizedPage;