import logo from './logo.svg';
import './App.css'; //App Compornent의 디자인 파일
import { Component } from 'react';

// Component 사용자 정의 태그
class App extends Component {
  render(){
    return (
      <div className="App">
        Hello React!!
      </div>
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
