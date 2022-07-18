import './App.css'; //App Compornent의 디자인 파일
import { Component } from 'react';

// Component 사용자 정의 태그
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title = "WEB" sub="world wide web!"></Subject>
        <Subject title = "React" sub="For UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

// 컴포넌트 정의시 최상위 태그는 하나만 사용해야한다.
// 컴포넌트는 Javascript와 비슷하지만 태그들을 문자열로 치환하지 않아도 react-app이
// jsx가 Javascript언어로 바꿔준다.

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

class Content extends Component {
  render() {
    return (
      <article>
        <h1>{this.props.title}</h1>
        {this.props.desc}
      </article>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
