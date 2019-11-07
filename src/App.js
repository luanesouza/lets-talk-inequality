import React, {Component} from 'react';
import GenderGapFacts from './components/GenderGapFacts';
import AgeGapFacts from './components/AgeGapFacts';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
  return (
    <main className="App">
      <header>
        <h1>Since we are part of the tech industry, we need to be aware of the problems it has, and start thinking of how to solve them</h1>
      </header>
      <section>
        <p>Now that we know the problem. Let's be part of the solution </p>
        <img src='https://www.equalitytrust.org.uk/sites/default/files/FI_logo.jpg' alt='inequality-logo'/>
      </section>
      <GenderGapFacts />
      <AgeGapFacts />
    </main>
  )}
}

export default withRouter(App);
