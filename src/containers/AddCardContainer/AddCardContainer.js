import React, { Component } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite/no-important';
import { database } from '../../firebase/firebase'; // eslint-disable-line no-unused-vars
import { createCard } from '../../actions/cardActions';

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

class AddCardContainer extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      newText: '',
    };
  }

  handleChange = (event) => {
    this.setState({ newText: event.target.value });
  };

  toggleCard = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      this.handleSubmit(event);
    } else if (event.keyCode === 27) {
      this.toggleCard();
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newText } = this.state;
    const { listId } = this.props;
    if (newText === '') return;
    const cardId = Math.floor(Math.random() * (100 - 5)) + 5;
    this.props.createCard(newText, cardId, listId);
    this.toggleCard();
    this.setState({ newText: '' });
  };

  render = () => {
    const { newText, isOpen } = this.state;
    if (!isOpen) {
      return (
        <button
          onClick={() => this.setState({ isOpen: true })}
          className={css(styles.btn)}
        >
          +
        </button>
      );
    }

    return (
      <div className='list'>
        <input
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={newText}
          className={css(styles.input)}
          placeholder="Add a new card..."
          spellCheck={false}
          onBlur={this.toggleCard}
        />
      </div>
    );
  };
}

export default connect(null, { createCard })(AddCardContainer);
