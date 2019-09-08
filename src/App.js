import React from 'react';
import './App.css';
import Search from './components/search';
import axios from 'axios';
import Items from './components/items';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query:"",
      results:[],
      validResults:[],
      showOnlyStocked:false
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentDidMount(){
    this.getResults();
  }
  async getResults(){
    try {
      const response = await axios.get('http://api.myjson.com/bins/109m7i');
      this.setState({results:response.data,validResults:response.data});
    } catch (error) {
      
    }
    
  }

  updateSearch(query){

    const filtered = this.state.results.filter( e => {
      if(e.name.toLowerCase().includes(query.toLowerCase())){
        return true
      }
    })
    this.setState({validResults: filtered})
  }

  render(){
    return(
      <div style={{display:"flex",alignItems:"center",justifyContent:"left",flexDirection:"column",
      textAlign:"left"
      }}>
        <div>
        <Search updateSearch = {this.updateSearch} value = {this.state.query}/>
        </div>
        <div>
          <label>
          <input type="checkbox" onChange={(e) => this.setState({showOnlyStocked:!this.state.showOnlyStocked})} 
          checked={this.state.showOnlyStocked}/>
            Only show products in stock   
          </label>
          
        </div>
        <div>
        <Items data = {this.state.validResults} showOnlyStocked= {this.state.showOnlyStocked}/>
        </div>
        
      </div>
      
    );
  }
}

export default App;
