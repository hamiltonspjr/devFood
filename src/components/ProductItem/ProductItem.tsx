import React from 'react';
import {Box, TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ProductImage} from './components/ProductImage';
import {ImageProps} from 'react-native';
import {Text} from '../Text/Text';

export interface ProductItemProps {
  title: string;
  description: string;
  thumbnail: ImageProps;
  id: string;
  quantity?: number;
}

interface Props extends TouchableOpacityBoxProps {
  item: ProductItemProps;
}

export function ProductItem({item, ...touchableOpacityBoxProps}: Props) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      marginBottom="s16"
      {...touchableOpacityBoxProps}>
      <ProductImage thumbnail={item.thumbnail} />
      <Box marginLeft="s12" flex={1}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">
          <Text
            preset="paragraphMedium"
            medium
            color="slate100"
            marginBottom="s2">
            {item.title}
          </Text>
          {item.quantity && (
            <Text preset="paragraphSmall" semiBold color="slate400">
              x {item.quantity.toString()}
            </Text>
          )}
        </Box>
        <Text preset="paragraphSmall" color="slate400">
          {item.description}
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
