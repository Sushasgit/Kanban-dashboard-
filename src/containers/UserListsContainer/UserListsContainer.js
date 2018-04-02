import React from 'react';
import { connect } from 'react-redux';
import firebase from "firebase/index";
// import { signIn } from '../actions';
import { getAllLists } from '../../actions/listsActions';
import List from '../../components/Lists/List'

class UserListsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists:[],
      test:' '
    };
  }

  componentDidMount(){
    console.log('Did mount!')
    this.setState({test:'test'})
    if (this.props.isAuthenticated) {
      console.log('Auth!!')
      this.props.getAllLists();
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
      this.props.getAllLists();
      console.log(this.props)
    }
  }

  render() {
    {console.log(this.props)}
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
  };
}


export default connect(mapStateToProps, { getAllLists })(UserListsContainer);
