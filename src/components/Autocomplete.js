import React, { Component, PropTypes } from 'react';
import './Autocomplete.css';

class Autocomplete extends Component {
  static props = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  }

	constructor(){
		super();

    this.state = {
      matchedItems: [],
      selectedItem: '',
      inputValue: '',
      showOptions: false
    }

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.onItemHover = this.onItemHover.bind(this);
  }

  //setting state after inputfield loses focus
  onBlur() {
    this.setState({
      inputValue: this.state.selectedItem,
      showOptions: false,
      matchedItems: [],
      selectedItem: ''
    })
  }

  //writing last input to inputfield and calling search 
	onChange(event){
    const input = event.target.value; 

    this.setState({inputValue: input}); 

    //if inputfield is empty, search doesn't need to be called
    if (input === '') return;

    //delaying call of search, until user finishes typing
    setTimeout((() =>
      this.search(input)), 300);
	}

  //setting value of the input field, when clicking dropdown
  onItemClick() {
    this.setState({inputValue: this.selectedItem}); 
  }

  //setting the last selected item
  onItemHover(item) {
    this.setState({selectedItem: item});
  }

  //filtering data
  search(value) {
    const matchedItems = this.props.items.filter(item => new RegExp(value, 'i').test(item));
    const showOptions = matchedItems.length > 0;

    this.setState({
      matchedItems: matchedItems,
      showOptions: showOptions
    });
  }

	render () {
		return (
      <div className="autocomplete">
        <input
          className="autocomplete-input"
          type="text"
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="type here"
        />
        { this.state.showOptions &&
          <div className="autocomplete-options">
            {
              this.state.matchedItems.map(item => {
                return (
                  <div 
                    className="autocomplete-option"
                    key={item}
                    onClick={this.onItemClick}
                    onMouseOver={this.onItemHover}
                  >
                    {item}
                  </div>
                )})
            }
          </div>
        }
      </div>
		);
	}
}

export default Autocomplete;