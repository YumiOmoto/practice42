//import logo from './logo.svg';
//import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';

function Password({value, onChange}){
  const [type, setType] = React.useState('password');
  const handleClick = () => setType(
    type === 'password' ? 'text' : 'password' 
  );

  return (
    <React.Fragment>
    <input type={type} value={value} onChange={onChange} />
    <button type="button" onClick={handleClick}>
      {type === 'password' ? '見る' : '隠す'}
    </button>
    </React.Fragment>
  );
}

function App() {
  const [val, setVal] = React.useState('');

  const handleChange = e => setVal(e.target.value);
  //　以降表示方式
  return (
    <React.Fragment>
    <p>パスワード</p>
    <Password value={val} onChange={handleChange} />
    <p>{val.length}文字</p>
    </React.Fragment>
  );
}

export default App;
// const root = document.getElementById('root');
// ReactDOM.render(<App />, root);