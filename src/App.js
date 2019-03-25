import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return ( 
      <div className="header">
        <img src={logo} width="100px" />
       {/* <h1>Good Recipes</h1> */}
      </div>
        )
  }
}

class Content extends React.Component {

  state = {
    isLoaded: false,
    recipes: {  
      "hits":[  
          {
            "recipe":{
              "label":"Baklava",
              "image":"https://www.edamam.com/web-img/2e9/2e928596dc8d15509df8d77271ccdac0.jpg",
              "url":"http://www.biggirlssmallkitchen.com/2009/03/baking-with-others-sisters-bond-over.html",
              }
          },
          {
            "recipe":{
              "label":"Tomato Risotto",
              "image":"https://www.edamam.com/web-img/9c1/9c1fff55ce4e98eee16622d9af6266d4.jpg",
              "url":"http://www.bonappetit.com/recipe/tomato-risotto",
              }
          },
          {
            "recipe":{
              "label":"Onion Rings",
              "image":"https://www.edamam.com/web-img/1eb/1eb58ffed03d3faa6d91d6a33132b140.jpg",
              "url":"http://www.marthastewart.com/351193/onion-rings",
              }
          },
          {
            "recipe":{
              "label":"Vegetable Lasagna",
              "image":"https://www.edamam.com/web-img/3f6/3f6b6c4c6f46e5c7531b7ea57fe02194.jpg",
              "url":"http://www.finecooking.com/recipes/sicilian-vegetable-lasagna.aspx?ac=fp",
              }
          },
          {
            "recipe":{
              "label":"Roasted Brocoli Salad with Red Onion Tomato",
              "image":"https://www.edamam.com/web-img/cc5/cc5dfc81f2d07c8c83e9d032989b469b.jpg",
              "url":"http://pamelasglutenfreerecipes.com/vegetarian/charred-broccoli-salad-with-red-onion-tomatoes-and-feta",
              }
          },
          {
            "recipe":{
              "label":"Spiced Salt-Roasted Prawns",
              "image":"https://www.edamam.com/web-img/bb2/bb29c7add23af5e57bbcba34c91cc83a.jpg",
              "url":"http://www.saveur.com/article/Recipes/salt-roasted-prawns",
              }
          },
      ]
  },
    query: ""
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  constructor(props) {
    super(props)
    this.api_key = "811b2bb7b7de9cdfad7867f1ef207920"
    this.app_id = "b572c556"
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

        <div id="content-description-wrapper">
          <span id="content-description" Style="display:block">Whether you’re looking for healthy recipes or ideas to use, search here for 
            tested recipes to choose from, so you’re sure to find the perfect dish.</span>

          <form onSubmit={this.updateSearchKey.bind(this)}>
            <input type="text" name="searchValue" onChange={this.updateInput} />
            <input type="submit" value="Search" />
          </form>
        </div>

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
       <span Style="display:block">Food Recipe 2019</span>
      </div>
    )
  }
}


class NutritionLabels extends React.Component {
    render() {

      return (
        <div className="nutrition-labels">
          {this.props.recipes.hits.map((item, index) => (
            index <= 8 ?
            <NutritionLabelItem key={index} recipe={item.recipe} />
            :
            null
          ))}
        </div>
      )
  }
}


class NutritionLabelItem extends React.Component {
  render() {
    return ( 
      <div className="col">
        <h4>{this.props.recipe.label}</h4>
        <img src={this.props.recipe.image} width="100%" alt="image1" />
        <a className="recipe-link" href={this.props.recipe.url} target="_blank">Go to Recipe</a>
      </div>
        )
  }
}


export default App;
