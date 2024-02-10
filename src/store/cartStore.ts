import {create} from 'zustand';
import {ProductProps} from '../utils/data/products';

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
};

export const useCartStore = create<StateProps>(set => ({
  products: [],
  add: (product: ProductProps) =>
    set(state => ({products: add(state.products, product)})),
}));

function add(products: ProductCartProps[], newProduct: ProductProps) {
  const existingProduct = products.find(({id}) => newProduct.id === id);

  if (existingProduct) {
    return products.map(product =>
      product.id === existingProduct.id
        ? {...product, quantity: product.quantity + 1}
        : product,
    );
  }

  return [
    ...products,
    {
      ...newProduct,
      quantity: 1,
    },
  ];
}
