import gql from 'graphql-tag';

const GET_VISIBLE = gql`
  query GetVisible {
    visible @client {
      visible
    }
  }
`;
export default GET_VISIBLE;

