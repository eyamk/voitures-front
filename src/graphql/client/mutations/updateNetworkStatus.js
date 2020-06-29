import gql from 'graphql-tag';

const UPDATE_NETWORK_STATUS = gql`
  mutation UpdateNetworkStatus($isConnected: Boolean!) {
    updateNetworkStatus(isConnected: $isConnected) @client
  }
`;
export default UPDATE_NETWORK_STATUS;