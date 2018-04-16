import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { css, StyleSheet } from 'aphrodite/no-important';
import { changeListTitle, createListSuccess } from '../../actions/listsActions';
import AddCardContainer from '../../containers/AddCardContainer/AddCardContainer';

import Card from '../../components/Card/Card';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  listHeader: {
    backgroundColor: '#121a2f',
    color: '#fbd854',
    width: '310px',
    minHeight: '38px',
    maxHeight: '100%',
    margin: '0 5px 0 5px',
    fontSize: '1.6em',
    textAlign: 'center',
  },

  body: {
    minHeight: '200px',
    padding: '40px',
    backgroundColor: '#31037d',
    margin: '5px',
  },
});

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.lists)
    console.log(this.props.isAuthenticated)
    if (this.props.isAuthenticated) {
      console.log('test cards')
      this.props.lists.map((item) => { (this.props.getAllCards(item.listKey)); });
    }
  }

  render() {
    console.log(this.props.lists);
    return (
      <Fragment>
        {
          this.props.lists ? this.props.lists.map((item, index) => {
            return (
              <div className={css(styles.list)} key={item.listTitle + index}>
                <header className={css(styles.listHeader)}>
                  {item.listTitle}
                </header>
                <div className={css(styles.body)}>
                  {item.cards ? Object.keys(item.cards).map(itemCard => (
                      <Card key={itemCard} card={item.cards[itemCard]}/>
                    )) : null}
                </div>
                <AddCardContainer listId={item.listKey} />
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
    cards: state.cards,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps, { createListSuccess, changeListTitle })(ListContainer);
