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
      showwOnlyStocked:false
    }
    
  }

  componentDidMount(){
    this.getResults();
  }
  async getResults(){
    try {
      const response = await axios.get('http://api.myjson.com/bins/109m7i');
      this.setState({results:response.data});
    } catch (error) {
      
    }
    
  }

  updateSearch(query){

  }

  render(){
    return(
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"
      }}>
        <div>
        <Search updateSearch = {this.updateSearch} value = {this.state.query}/>
        </div>
        <div>
        <Items data = {this.state.results} showwOnlyStocked= {this.state.showwOnlyStocked}/>
        </div>
        
      </div>
      
    );
  }
}

export default App;
