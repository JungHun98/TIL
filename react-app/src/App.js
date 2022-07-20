import './App.css'; //App Compornent의 디자인 파일
import { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

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
