import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import ObjectPeople from './entities/Users';
import CubeLoading from './components/ui/cube';
import './App.css';
import PeopleList from './components/ui/ui';
import FailSearch from './components/ui/error';

import About from './components/About/About';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allPeople: [],
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
          allPeople: myPeople,
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
      constructor(gender, name, lastname, email, picture, bday) {
        this.gender = gender;
        this.name = name[0].toUpperCase() + name.slice(1, name.length);
        this.lastname = lastname[0].toUpperCase() + lastname.slice(1, lastname.length)
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
            return new UsersObject2(element.gender, element.name.first, element.name.last, element.email, element.picture.large, element.dob.date)
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
  handleChange2 = (textInput) => {

    const filteredUsers = this.state.allPeople.filter((user) => {
      return user.name.toLowerCase().includes(textInput.toLowerCase()) || user.lastname.toLowerCase().includes(textInput.toLowerCase())
    })

    this.setState({
      people: filteredUsers
    })
  }


  render() {

    if (this.state.people.length === 0 && this.state.allPeople.length === 0) {
      return <CubeLoading />
    }
    else
      if (this.state.people.length === 0) {
        return <FailSearch />;
      }

    return (
      <div className="App">
        <Header
          handleChange={this.handleChange2}
          onButtonClick={this.toggleLayout}
          onButtonClick2={this.toggleRefresh} />

        <Switch>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/' component={() => <PeopleList selected={this.state.selected} people={this.state.people} />} />
        </Switch>
        <Footer />
      </div>
    );

  }
}


export default App;
