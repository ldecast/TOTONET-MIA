import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component {
    render() {
        return <div>
            {/* <img src='https://w7.pngwing.com/pngs/913/63/png-transparent-sad-emoji-icon-smiley-computer-icons-emoticon-black-and-white-sad-miscellaneous-face-heart.png' /> */}
            <h1>404 Not Found</h1>
            <p style={{ textAlign: "center" }}>
                <Link to="/guest">Go to Home </Link>
            </p>
        </div>;
    }
} export default NotFoundPage;