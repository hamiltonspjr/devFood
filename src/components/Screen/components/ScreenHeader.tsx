import React from 'react';
import {ScreenProps} from '../Screen';
import {Box} from '../../Box/Box';
import {SimpleLogo} from '../../../brand/SimpleLogo';
import {Text} from '../../Text/Text';
import {Icon} from '../../Icon/Icon';

type Props = Pick<ScreenProps, 'title' | 'icon' | 'cartQuantityItems'>;

export function ScreenHeader({title, icon, cartQuantityItems}: Props) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth={title ? 1 : 0}
      borderBottomColor="slate700"
      pb={title ? 's20' : 's0'}
      mb={title ? 's20' : 's0'}>
      {title && (
        <Box>
          <SimpleLogo />
          <Text preset="subtitleSmall" semiBold mt="s8">
            {title}
          </Text>
        </Box>
      )}
      {cartQuantityItems && icon && (
        <Box alignItems="center" position="relative">
          <Box
            position="absolute"
            backgroundColor="lime300"
            width={16}
            height={16}
            borderRadius="s16"
            alignItems="center"
            justifyContent="center"
            zIndex={1}
            left={12}
            bottom={16}>
            <Text preset="paragraphSmall" bold color="background">
              {cartQuantityItems}
            </Text>
          </Box>
          <Icon name={icon} size={24} />
        </Box>
      )}
    </Box>
  );
}
