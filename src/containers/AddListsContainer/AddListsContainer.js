import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList } from '../../actions/listsActions';

class AddListsContainer extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      listTitle: '',
    };
  }

  handleBlur = () => { (this.setState({ isOpen: false })); };

  handleChange = (event) => {
    this.setState({ listTitle: event.target.value });
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.handleSubmit();
    } else if (event.keyCode === 27) {
      this.setState({ isOpen: false, listTitle: '' });
    }
  };

  handleSubmit = () => {
    const { listTitle } = this.state;
    const listId = Math.floor(Math.random() * (100 - 5)) + 5;
    if (listTitle === '') return;
    this.props.createList(listTitle, listId);

    this.setState({ isOpen: false, listTitle: '' });
  };

  render = () => {
    const { isOpen, listTitle } = this.state;
    if (!isOpen) {
      return (
        <button
          onClick={() => this.setState({ isOpen: true })}
          className='add-list-button'
        >
          Add a new list...
        </button>
      );
    }
    return (
      <div className='list'>
        <input
          autoFocus
          value={listTitle}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className='list-adder-textarea'
          onBlur={this.handleBlur}
          spellCheck={false}
        />
      </div>
    );
  };
}

export default connect(null, { createList })(AddListsContainer);
