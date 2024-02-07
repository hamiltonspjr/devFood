import React from 'react';
import {ScreenProps} from '../Screen';
import {Box} from '../../Box/Box';
import {SimpleLogo} from '../../../brand/SimpleLogo';
import {Text} from '../../Text/Text';
import {Icon} from '../../Icon/Icon';

type Props = Pick<ScreenProps, 'title' | 'icon'>;

export function ScreenHeader({title, icon}: Props) {
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
      {icon && <Icon name={icon} size={24} />}
    </Box>
  );
}
