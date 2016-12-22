import React, {Component} from 'react';
import './Autocomplete.css';

class Autocomplete extends Component {
	constructor(props){
		super(props);

    this.state = {
      matchedItems: [],
      selectedItem: '',
      inputValue: '',
      showOptions: false
    }

    //mock data
    this.items = [
      "Livepath",
      "Youspan",
      "Skyble",
      "Browsedrive",
      "Youtags",
      "Shufflester",
      "Devcast",
      "Fatz",
      "Cogilith",
      "Digitube",
      "Feednation",
      "Feedbug",
      "Tagtune",
      "Tekfly",
      "Camido",
      "Eamia",
      "Trilia",
      "Youfeed",
      "Yakitri",
      "Voonte"
    ];
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
    const matchedItems = this.items.filter(item => new RegExp(value, 'i').test(item));
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
          value={this.state.inputValue}
          onChange={this.onChange.bind(this)}
          onBlur={this.onBlur.bind(this)}
          placeholder="type here"
        />
        //Dropdown Container
        { this.state.showOptions &&
          <div className="autocomplete-options">
            {
              this.state.matchedItems.map(item => {
                return (
                  <div 
                    className="autocomplete-option"
                    key={item}
                    onClick={this.onItemClick.bind(this)}
                    onMouseOver={this.onItemHover.bind(this, item)}
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