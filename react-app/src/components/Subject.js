import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <header>
                {/* 태그의 속성 가져오기 {this.props.attribute} 동적 표현*/}
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;