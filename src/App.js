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
        <img src={logo} width="50px" />
       <h1>Good Recipes</h1>
      </div>
        )
  }
}

class Container extends React.Component {

  state = {
    isLoaded: false,
    recipes: [],
    query: ""
  }

  constructor(props) {
    super(props)
    this.api_key = "811b2bb7b7de9cdfad7867f1ef207920"
    this.app_id = "b572c556"
    this.state = {recipes: null, query: ""}
  }

  performSearch = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${this.state.query}&app_id=${this.app_id}&app_key=${this.api_key}`)
    const recipes = await response.json();
    this.setState({recipes: recipes, isLoaded: true})
  }

  updateSearchKey = (e) => {
    e.preventDefault();
    this.setState({isLoaded: false});
    this.performSearch();
  }

  updateInput = (e) =>{
    this.setState({query: e.target.value});  
  }

  render() {

    return ( 
      <div className="container">

        <span id="content-description" Style="display:block">Whether you’re looking for healthy recipes or ideas to use, search here for 
          tested recipes to choose from, so you’re sure to find the perfect dish.</span>

        <form onSubmit={this.updateSearchKey.bind(this)}>
          <input type="text" name="searchValue" onChange={this.updateInput} />
          <input type="submit" value="Search" />
        </form>

        {!this.state.isLoaded ? (
            this.state.query !== "" && this.state.recipes !== null ? <div>Loading...</div> : <div></div>
          ) : (
            <NutritionLabels recipes={this.state.recipes} />
          )
        }

      </div>
    )
  }
}


class Footer extends React.Component {
  render() {
    return ( 
      <div className="footer" Style="clear: both">
       <span Style="display:block">Footer, I am a class footer</span>
      </div>
    )
  }
}


class NutritionLabels extends React.Component {
  

    render() {

      return (
        <div className="nutrition-labels">
          {this.props.recipes.hits.map((item, index) => (
            <NutritionLabelItem key={index} recipe={item.recipe} />
          ))}
        </div>
      )
  }
}


class NutritionLabelItem extends React.Component {
  render() {

    console.log(this.props.recipe);

    return ( 
      <div className="col">
        <h4>{this.props.recipe.label}</h4>
        <img src={this.props.recipe.image} width="100%" alt="image1" />
        <a href={this.props.recipe.url} target="_blank">Go to Recipe</a>
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
