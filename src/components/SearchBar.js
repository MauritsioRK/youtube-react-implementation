import React from 'react';
import { Dropdown, Input, Segment } from 'semantic-ui-react';

const searchOptions = [
  { key: 'video', text: 'Video', value: 'video' },
  { key: 'channel', text: 'Channel', value: 'channel' },
]

class SearchBar extends React.Component {
  state = {
    searchFilter: "video",
    searchValue: ""
  }

  handleSearchValueChange = e => {
    this.setState({ searchValue: e.target.value });
  }

  submitSearchValue = () => {
    this.props.callback([this.state.searchValue.toLowerCase(), this.state.searchFilter]);
  }

  render() {
    return (
      <Segment>
        <Input
          fluid
          action={
            { onClick: this.submitSearchValue, color: 'youtube', icon: 'youtube', labelPosition: 'left', content: 'Search', size: "huge" }
          }
          label={
            <Dropdown defaultValue="video"
              onChange={(e, { value }) => this.setState({ searchFilter: value })}
              options={searchOptions} />
          }
          onChange={this.handleSearchValueChange}
          labelPosition="left"
          placeholder={`Search by ${this.state.searchFilter}s`}
          size="huge" />
      </Segment >
    )
  }
}

export default SearchBar;