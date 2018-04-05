import React from 'react';
import { connect } from 'react-redux';
import { getAllLists } from '../../actions/listsActions';
import { getAllCards } from '../../actions/cardActions';
import List from '../../components/Lists/List';


class UserListsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      test: '',
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.getAllLists();
    }
  }

  render() {
    return (
      <List
        lists={this.props.lists}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    isAuthenticated: state.auth.isAuthenticated,
    cards: state.cards,
  };
}


export default connect(mapStateToProps, { getAllLists, getAllCards })(UserListsContainer);
