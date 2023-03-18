import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachSearch =>
      eachSearch.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg">
        <h1 className="head">Destination Search</h1>
        <div className="search-cont">
          <input
            type="search"
            placeholder="search"
            onChange={this.onSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <div className="destination-cont">
          <ul className="ul">
            {searchResults.map(each => (
              <DestinationItem destinationDetails={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
