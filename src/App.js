import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container/>
        <Footer/>
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return ( 
      <div className="header">
       <h1>Header, I am a class header</h1>
      </div>
        )
      }
    }
class Container extends React.Component {
  render() {
    return ( 
      <div className="container">
       <h1>Container, I am a class Container</h1>
       <NutritionLabels/>
      </div>
        )
      }
    }
class Footer extends React.Component {
  render() {
    return ( 
      <div className="footer">
       <h6>Footer, I am a class Footer</h6>
      </div>
        )
      }
    }

  class NutritionLabels extends React.Component {
    render() {
      return (
        <div className="nutrition-labels">
          <div className="row">
            <NutritionLabelItem/>
            <NutritionLabelItem/>
            <NutritionLabelItem/>
          </div>
          <div className="row">
            <NutritionLabelItem/>
            <NutritionLabelItem/>
            <NutritionLabelItem/>
          </div>
        </div>
      )
    }
  }

class NutritionLabelItem extends React.Component {
  render() {
    return ( 
      <div className="col">
          <img src=""/>
      </div>
        )
      }
    }



ReactDOM.render(
  <div className="container">
    <Header /> 
    <Container />
    <Footer />
  </div>,
  document.getElementById('root')
);



export default App;
