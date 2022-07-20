import React, {Component} from 'react';

class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href='1.html'>HTML</a></li>
                    <li><a href='2.html'>CSS</a></li>
                    <li><a href='3.html'>Javascript</a></li>
                </ul>
            </nav>
        );
    }
}

export default TOC;
// TOC를 사용할 수 있도록함.