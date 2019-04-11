import React, { Component } from 'react';
import './App.css';
import Beer from './components/Beer'
class App extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    this.getAllBeers()
  }


  getAllBeers = () => {
    fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(data => {
      this.setState({
        beers: data
      })
    })
  }
  
  displayAllBeers = () => {
    const beers = this.state.beers
     return beers.map(beer => {
      return <Beer beer={beer} />
    })
  }
  
  
  render() {
    // console.log(this.state)
    return (
      <div className="App">
        Hello world
        {this.displayAllBeers()}
      </div>
    );
  }
}

export default App;
