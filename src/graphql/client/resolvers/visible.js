import GET_VISIBLE from '../queries/getVisible';

const Visible = {
  resolvers: {
    Mutation: {
      setVisibilty: (_, __, { cache }) => {
        const { visible: visibleData } = cache.readQuery({ query: GET_VISIBLE });
        const data = {
          visible: {
            ...visibleData,
            visible: !visibleData.visible,
          },
        };
        cache.writeData({ data });
        return null;
      },
    },
  },
  defaults: {
    visible: {
      __typename: 'visible',
      visible: false,
    },
  },
};
export default Visible;
