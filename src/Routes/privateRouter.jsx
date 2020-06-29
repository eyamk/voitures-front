import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { compose, graphql } from 'react-apollo';
import getNetworkSatus from '../graphql/client/queries/getNetworkStatus';

const PrivateRoute = ({ component: Component, networkStatus: { networkStatus }, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      networkStatus.isConnected
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);
export default compose(
  graphql(
    getNetworkSatus, {
      props: ({ data: networkStatus }) => ({
        networkStatus,
      }),
    }
  )
)(PrivateRoute);