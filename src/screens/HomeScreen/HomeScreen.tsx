import React, {useState} from 'react';

import {Screen} from '../../components/Screen/Screen';
import {Button} from '../../components/Button/Button';

import {FlatList, StyleProp, ViewStyle} from 'react-native';
import {CATEGORIES} from '../../utils/data/products';

export function HomeScreen() {
  const [category, setCategory] = useState(CATEGORIES[0]);
  function handleCategoryPress(item: string) {
    setCategory(item);
  }
  return (
    <Screen title="Faça seu pedido" icon="shoppingBag" cartQuantityItems="0">
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
    </Screen>
  );
}

const $flatListStyle: StyleProp<ViewStyle> = {
  gap: 12,
};
