import gql from 'graphql-tag';

export default gql`
  mutation AddOneItem($input: carInput) {
    addOneItem(input: $input) @client
  }
`;