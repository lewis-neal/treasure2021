import questionMark from './questionMark.png';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {success: false};
    this.textChange = this.textChange.bind(this);
  }

  textChange(props) {
    if ("password" == props.target.value) {
      this.setState({success: true});
    }
  }

  render() {
    let display = <input type="text" placeholder="Password" className="code-text-box" onChange={this.textChange}></input>;

    if (this.state.success) {
      display = <p className="clue">CLUE</p>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={questionMark}/>
          {display}
        </header>
      </div>
    );
  }
}

export default App;
