import React, {useState} from 'react';
import {Screen} from '../../components/Screen/Screen';

import {ProductCartProps, useCartStore} from '../../store/cartStore';
import {ProductItem} from '../../components/ProductItem/ProductItem';
import {Box} from '../../components/Box/Box';
import {Text} from '../../components/Text/Text';
import {formatCurrency} from '../../utils/stringsUtils';
import {TextInput} from '../../components/TextInput/TextInput';
import {Button} from '../../components/Button/Button';
import {Alert, Linking} from 'react-native';
import {AppScreenProps} from '../../routes/navigationType';
import {Icon} from '../../components/Icon/Icon';

const $PHONE_NUMBER = '5511999999999';

export function CartScreen({navigation}: AppScreenProps<'CartScreen'>) {
  const cartStore = useCartStore();
  const [address, setAddress] = useState('');
  const valueTotalCart = formatCurrency(
    cartStore.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    ),
  );

  function handleProductCartRemove(product: ProductCartProps) {
    Alert.alert(
      'Remover',
      `Deseja remover o produto ${product.title} do carrinho?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => cartStore.remove(product.id),
        },
      ],
    );
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert(
        'Endereço de entrega',
        'Informe o endereço de entrega para finalizar o pedido',
      );
    }

    const products = cartStore.products
      .map(product => `\n ${product.quantity} ${product.title}`)
      .join('');

    const message = `
    🍔 NOVO PEDIDO
    \n Entregar em: ${address}
    ${products}
    \n Total: ${valueTotalCart}
    `;
    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${$PHONE_NUMBER}&text=${message}`,
    );

    cartStore.clear();
    navigation.navigate('HomeScreen');
  }

  return (
    <Screen title="Seu carrinho" scrollable>
      {cartStore.products.length > 0 ? (
        <Box borderBottomWidth={1} borderBottomColor="slate700">
          {cartStore.products.map(product => (
            <ProductItem
              item={product}
              key={product.id}
              onPress={() => handleProductCartRemove(product)}
            />
          ))}
        </Box>
      ) : (
        <Text preset="paragraphMedium" color="slate400" textAlign="center">
          Seu carrinho está vazio
        </Text>
      )}
      <Box flexDirection="row" mt="s20" alignItems="center">
        <Text color="slate100" semiBold preset="subtitleSmall" mr="s8">
          Total:
        </Text>
        <Text preset="subtitleLarge" color="lime400">
          {valueTotalCart}
        </Text>
      </Box>
      <TextInput
        boxProps={{mt: 's20'}}
        placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
        value={address}
        onChangeText={setAddress}
      />
      <Button
        title="Enviar pedido"
        mt="s56"
        onPress={handleOrder}
        RightComponent={
          <Icon
            name="arrowRightCircle"
            backgroundColor="primary"
            color="black"
          />
        }
      />
      <Button
        title="Voltar ao cardápio"
        preset="outline"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </Screen>
  );
}
