import React, { Component } from 'react';
import { database } from './firebase';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: '',
    };
    this.dataRef = null;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.dataRef.push(this.state.newData);
  }

  componentDidMount() {
    this.dataRef = database.ref('/path/to/my/db');

    this.dataRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val(),
      });      
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          {JSON.stringify(this.state.data, null, 2)};
        </pre>
        <form className='App--form'  onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.newData} onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default App;
