import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <input placeholder="Search"
            onChange = {e => this.props.updateSearch(e.target.value)}
            value = {this.props.query}
            />
        )
    }
}

export default Search