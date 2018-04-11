import React from 'react';
import SignUpPage from '../SignUpPage/SignUpPage';
import DashboardPageContainer from '../../containers/DashboardPageContainer/DashboardPageContainer';

export default props => (props.isAuthenticated ? <DashboardPageContainer/> : <SignUpPage/>);
