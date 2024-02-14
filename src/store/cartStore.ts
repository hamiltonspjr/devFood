import {create} from 'zustand';
import {ProductProps} from '../utils/data/products';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createJSONStorage, persist} from 'zustand/middleware';

export type ProductCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductCartProps[];
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
  clear: () => void;
};

export const useCartStore = create(
  persist<StateProps>(
    set => ({
      products: [],
      add: (product: ProductProps) =>
        set(state => ({products: add(state.products, product)})),
      remove: (productId: string) =>
        set(state => ({products: remove(state.products, productId)})),
      clear: () => set(() => ({products: []})),
    }),
    {
      name: 'nlw:cart',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

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

function remove(products: ProductCartProps[], productRemovedId: string) {
  const updatedProducts = products.map(product =>
    product.id === productRemovedId
      ? {
          ...product,
          quantity: product.quantity > 1 ? product.quantity - 1 : 0,
        }
      : product,
  );
  return updatedProducts.filter(product => product.quantity > 0);
}
