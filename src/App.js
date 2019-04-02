import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import ObjectPeople from './entities/Users';
import CubeLoading from './components/ui/cube';
import './App.css';
import PeopleList from './components/ui/ui';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
      selected: true,
      inputValue: "",
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


  toggleRefresh = () => {
    const Controller2 = fetch('https://randomuser.me/api/?results=15')
      .then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        return data.results;
      });

    class UsersObject2 {
      constructor(gender, name, email, picture, bday) {
        this.gender = gender;
        this.name = name;
        this.email = ("***") + email.slice(3, email.length);
        this.picture = picture;
        this.bday = new Date(bday).getDate() + '.' + new Date(bday).getMonth() + "." + new Date(bday).getFullYear();
      }
    }



    const ObjectPeople2 = () => {

      const newPeople = Controller2
        .then((peopleResults) => {
          console.log(peopleResults);
          return peopleResults.map((element) => {
            return new UsersObject2(element.gender, element.name, element.email, element.picture.large, element.dob.date)
          })
        })

      return newPeople
    }
    ObjectPeople2()
      .then((myPeople) => {
        console.log(myPeople);

        this.setState({
          people: myPeople
        })
      })

  }
  handleChange = (event) => {

    this.setState({
      inputValue: event.target.value
    })

  }
  // componentWillUpdate() {
  //   this.setState({
  //     people: CubeLoading,
  //   })
  // }

  render() {
    return (
      <div className="App">
        <CubeLoading />
        <Header onButtonClick={this.toggleLayout} onButtonClick2={this.toggleRefresh} />
        <PeopleList selected={this.state.selected} people={this.state.people} />
        <Footer />
      </div>
    );
  }
}

export default App;
