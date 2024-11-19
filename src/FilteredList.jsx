import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // The state includes the search query and the selected filter type
    this.state = {
      search: "", // Search query
      type: "All" // Default filter type
    };
  }

  // Sets the state whenever the user types in the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Updates the "type" state based on the selected dropdown option
  onFilter = (filterType) => {
    this.setState({ type: filterType });
  }

  // Filters items based on both search query and type
  filterItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(this.state.search);
    const matchesType = this.state.type === "All" || item.type === this.state.type;
    return matchesSearch && matchesType;
  }

  render() {
    return (
      <div className="filter-list">
        {/* Dropdown Menu */}
        <DropdownButton title={`Filter: ${this.state.type}`} id="filter-dropdown">
          <Dropdown.Item onClick={() => this.onFilter("All")}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => this.onFilter("Fruit")}>Fruit</Dropdown.Item>
          <Dropdown.Item onClick={() => this.onFilter("Vegetable")}>Vegetable</Dropdown.Item>
        </DropdownButton>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          onChange={this.onSearch}
        />

        {/* Filtered List */}
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;