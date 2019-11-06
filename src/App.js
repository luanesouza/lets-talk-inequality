import React, {Component} from 'react';
import GenderGapFacts from './components/GenderGapFacts';
import AgeGapFacts from './components/AgeGapFacts';
import './App.css';

class App extends Component () {
  render() {
  return (
    <main className="App">
      <h1>Since we are part of the tech industry, we need to be aware of the problems it has, and start thinking of how to solve them</h1>
      <GenderGapFacts />
      <AgeGapFacts />

    </main>
  )}
}

export default App;
