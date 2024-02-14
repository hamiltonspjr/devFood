import React from 'react';
import {Image} from 'react-native';
import {ProductItemProps} from '../ProductItem';

type Props = Pick<ProductItemProps, 'thumbnail'>;

export function ProductImage({thumbnail}: Props) {
  return (
    <Image
      source={thumbnail}
      resizeMode="cover"
      width={92}
      height={92}
      borderRadius={6}
    />
  );
}
