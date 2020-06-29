addOneItem: (_, { input }, { cache }) => {
    const data = cache.readQuery({ query: GET_CART });
    if (data.cart.items.some((item) => item.product.id === input.id)) {
      data.cart.items = data.cart.items.map((item) => {
        if (item.product.id === input.id && item.quantity < item.product.quantity) {
          item.quantity++;
          data.cart.totalQuantity++;
          data.cart.totalPrice += Number(item.product.price);
        }
        return item;
      });
    } else {
      data.cart.items.push({
        product: input,
        quantity: 1,
        __typename: 'OrderItem',
      });
      data.cart.totalQuantity++;
      data.cart.totalPrice += Number(input.price);
    }
    cache.writeData({ data });
    return null;
  },