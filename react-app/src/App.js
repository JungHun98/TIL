import './App.css'; //App Compornent의 디자인 파일
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

// Component 사용자 정의 태그
class App extends Component {
  constructor(props){
    super(props);

    // state 값 초기화
    this.state = {
      subject:{title:'WEB', sub:'World Wide Web!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information ...'},
        {id:2, title:'CSS', desc:'CSS is for design ...'},
        {id:3, title:'Javascript', desc:'Javascript is for interactive ...'}
      ]
    }
  }

  render() {
    return (
      // state를 자식에게 전달
      <div className="App">
        <Subject title = {this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

// 컴포넌트 정의시 최상위 태그는 하나만 사용해야한다.
// 컴포넌트는 Javascript와 비슷하지만 태그들을 문자열로 치환하지 않아도 react-app이
// jsx가 Javascript언어로 바꿔준다.

// props는 UI로 비유할 수 있다. Component를 사용하는 입장에서 중요한 것, props로 Component를 조작
// state는 기계의 내부적인 상태를 의미한다. props에 따라 달라지는 내부 동작
// props와 state는 철저하게 분리되어 있어야 한다.
// props에서 JS Code로 실행되도록 하려면 중괄호({})안에 코드를 입력하자.

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
