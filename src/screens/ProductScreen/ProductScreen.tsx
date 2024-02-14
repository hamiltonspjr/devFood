import React from 'react';
import {Text} from '../../components/Text/Text';
import {Screen} from '../../components/Screen/Screen';
import {AppScreenProps} from '../../routes/navigationType';
import {PRODUCTS} from '../../utils/data/products';
import {
  Dimensions,
  Image,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Box} from '../../components/Box/Box';
import {formatCurrency} from '../../utils/stringsUtils';
import {Button} from '../../components/Button/Button';
import {useCartStore} from '../../store/cartStore';
import {useNavigation} from '@react-navigation/native';

export function ProductScreen(props: AppScreenProps<'ProductScreen'>) {
  const id = props.route.params.productId;
  const product = PRODUCTS.filter(item => item.id === id)[0];
  const cartStore = useCartStore();
  const navigation = useNavigation();

  function handleAddToCart() {
    cartStore.add(product);
    navigation.navigate('HomeScreen');
  }

  return (
    <Screen style={$screenStyle} scrollable>
      <Image source={product.cover} resizeMode="cover" style={$imageStyle} />
      <Box paddingHorizontal="s20" mt="s32">
        <Text preset="subtitleSmall" semiBold mb="s8">
          {product.title}
        </Text>
        <Text preset="subtitleLarge" semiBold color="lime400" mb="s8">
          {formatCurrency(product.price)}
        </Text>
        <Text preset="paragraphMedium" color="slate400" mb="s24">
          {product.description}
        </Text>
        {product.ingredients.map((ingredient, index) => (
          <Text
            key={index}
            preset="paragraphMedium"
            color="slate400"
            paddingLeft="s4">
            {'\u2022'}
            {ingredient}
          </Text>
        ))}
        <Button
          title="Adicionar ao pedido"
          preset="primary"
          mt="s56"
          onPress={handleAddToCart}
        />
        <Button
          title="Voltar ao cardápio"
          preset="outline"
          mt="s8"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </Box>
    </Screen>
  );
}

const $screenStyle: StyleProp<ViewStyle> = {
  paddingHorizontal: 0,
  paddingTop: 0,
};
const $imageStyle: StyleProp<ImageStyle> = {
  width: Dimensions.get('window').width,
  height: 200,
};
