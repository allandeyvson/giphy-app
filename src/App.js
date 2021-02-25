import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import GifCard from './GifCard';
const apiKey = require('./config.json').api_key

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      gifs: []
    }
  }

  changeSearchTerm = (event) => {
    console.log(this.state)
    this.setState({
      searchTerm: event.target.value
    })
  }

  getGifs = () => {
    var URL =
      "http://api.giphy.com/v1/gifs/search?"
        .concat("api_key=" + apiKey)
        .concat("&limit=20")
        .concat("&q=" + this.state.searchTerm)
    fetch(URL, { method: "GET" })
      .then(resp => resp.json())
      .then(resp => this.setState({ gifs: resp.data }))
  }

  render() {
    return (
      <div>
        <SearchBar
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
          getGifs={this.getGifs}
        />

        {
          this.state.gifs.map(gif =>
            <GifCard key={gif.id} gif={gif} />
          )
        }

      </div>
    )
  }
}

export default App