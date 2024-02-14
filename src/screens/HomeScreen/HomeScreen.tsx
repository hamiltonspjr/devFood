import React, {useRef, useState} from 'react';

import {Screen} from '../../components/Screen/Screen';
import {Button} from '../../components/Button/Button';

import {
  FlatList,
  ListRenderItemInfo,
  SectionList,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {CATEGORIES, MENU} from '../../utils/data/products';
import {Text} from '../../components/Text/Text';
import {
  ProductItem,
  ProductItemProps,
} from '../../components/ProductItem/ProductItem';
import {AppScreenProps} from '../../routes/navigationType';
import {useCartStore} from '../../store/cartStore';

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList<ProductItemProps>>(null);

  function handleCategoryPress(selectedCategory: string) {
    setCategory(selectedCategory);

    const sectionIndex = CATEGORIES.findIndex(
      category => category === selectedCategory,
    );

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        animated: true,
      });
    }
  }

  function navigateToProductScreen(productId: string) {
    navigation.navigate('ProductScreen', {productId});
  }

  const cartStore = useCartStore();
  const cartQuantityItems = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  function renderItem({item}: ListRenderItemInfo<ProductItemProps>) {
    return (
      <ProductItem
        item={item}
        onPress={() => navigateToProductScreen(item.id)}
      />
    );
  }

  return (
    <Screen
      title="Faça seu pedido"
      icon="shoppingBag"
      cartQuantityItems={cartQuantityItems.toString()}
      flex={1}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Button
            title={item}
            preset="category"
            isSelected={item === category}
            onPress={() => handleCategoryPress(item)}
          />
        )}
        horizontal
        contentContainerStyle={$flatListStyle}
        showsHorizontalScrollIndicator={false}
      />

      <SectionList
        sections={MENU}
        keyExtractor={item => item.id}
        ref={sectionListRef}
        stickySectionHeadersEnabled={false}
        renderItem={renderItem}
        renderSectionHeader={({section: {title}}) => (
          <Text
            preset="subtitleSmall"
            color="slate100"
            semiBold
            mt="s32"
            mb="s12">
            {title}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const $flatListStyle: StyleProp<ViewStyle> = {
  gap: 12,
  paddingBottom: 16,
};
