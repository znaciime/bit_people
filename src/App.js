import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import ObjectPeople from './entities/Users';

import './App.css';
import PeopleList from './components/ui/ui';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
      selected: true,
    }
  }

  toggleLayout = () => {
    this.setState({ selected: !this.state.selected })
  }

  componentDidMount() {
    ObjectPeople()
      .then((myPeople) => {
        console.log(myPeople);

        this.setState({
          people: myPeople
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header onButtonClick={this.toggleLayout} />
        <PeopleList selected={this.state.selected} people={this.state.people} />
        <Footer />
      </div>
    );
  }
}

export default App;
