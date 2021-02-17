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
    if ("pancakes" == props.target.value) {
      this.setState({success: true});
    }
  }

  render() {
    let display = <input type="text" placeholder="Password" className="code-text-box" onChange={this.textChange}></input>;

    if (this.state.success) {
      display = <div><p className="clue">A <b>cipher</b> worthy of a king.. or a <b>Caesar</b> to be more exact.</p><p>Fc vlr yrjmba fkql Ba Pebboxk lk qeb pqobbq, texq jfdeq eb exsb tfqe efj?</p></div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your hunt begins in Yorkshire..</h1>
          <img src={questionMark}/>
          {display}
        </header>
      </div>
    );
  }
}

export default App;
