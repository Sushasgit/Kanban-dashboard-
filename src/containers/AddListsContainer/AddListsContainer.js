import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite/no-important';
import { createList } from '../../actions/listsActions';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#fbd854',
    border: 'none',
    fontSize: '1em',
    fontWeight: '900',
    padding: '10px 20px',
  },

  input: {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#121a2f',
    color: '#fff',
  },
});

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
          className={css(styles.btn)}
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
          className={css(styles.input)}
          onBlur={this.handleBlur}
          spellCheck={false}
        />
      </div>
    );
  };
}

export default connect(null, { createList })(AddListsContainer);
