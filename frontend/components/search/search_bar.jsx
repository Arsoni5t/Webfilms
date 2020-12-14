import React from 'react';
import { Redirect } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
import {DebounceInput} from 'react-debounce-input';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      queryString: "",
    }
   this.timer = null;
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value, 
      
    },() => {
            this.props.history.push(`/search?movie=${this.state.queryString}`);
            this.setState({
              queryString: e.target.value
                 })});
  };

  

  render() {
    return (
      <div className="search-icon">    
        <form >
          <DebounceInput 
            className="searchthing"
            placeholder="Title, Genre"
            minLength={3}
            type="search"
            debounceTimeout={300}
            value={this.state.queryString}
            onChange={this.update("queryString")} />
            
        </form>  
      </div>
    );
  }
}

export default SearchBar;
