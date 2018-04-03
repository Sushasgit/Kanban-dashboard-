import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite/no-important';
import { changeListTitle } from '../../actions/listsActions';

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'yellow',
    width: '300px',
    minHeight: '0px',
    maxHeight: '100%',
    margin: '0 5px 0 5px',
    borderRadius: '6px',
    fontSize: '1.6em',
    transition: 'box-shadow 0.15s, background 0.3s',
  },
});

class ListHeaderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      newTitle: props.listTitle,
    };
  }

  handleChange = (event) => {
    this.setState({ newTitle: event.target.value });
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.handleSubmit();
    } else if (event.keyCode === 27) {
      this.revertTitle();
    }
  };

  handleSubmit = () => {
    const { newTitle } = this.state;
    const { listTitle, listId } = this.props.lists;
    if (newTitle === '') return;
    if (newTitle !== listTitle) {
      this.props.changeListTitle(newTitle, listId);
    }
    this.setState({ isOpen: false });
  };

  revertTitle = () => {
    this.setState({ newTitle: this.props.listTitle, isOpen: false });
  };

  openTitleEditor = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { isOpen, newTitle } = this.state;
    const { openTitleEditor } = this;
    return (
      <Fragment>
        {isOpen ? (
            <div className="list-title-textarea-wrapper">
            <input
              autoFocus
              value={newTitle}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              className="list-title-textarea"
              onBlur={this.handleSubmit}
              spellCheck={false}
            />
            </div>
          ) :
          this.props.lists ? this.props.lists.map((item, index) => {
            return (
              <div
                onClick={openTitleEditor}
                className={css(styles.listItem)}
                key={item.listTitle + index}>
                {item.listTitle}
              </div>);
            }) : null
        }
      </Fragment>

    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
  };
}

export default connect(mapStateToProps, { changeListTitle })(ListHeaderContainer);
