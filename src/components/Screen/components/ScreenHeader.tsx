import React from 'react';
import {ScreenProps} from '../Screen';
import {Box} from '../../Box/Box';
import {SimpleLogo} from '../../../brand/SimpleLogo';
import {Text} from '../../Text/Text';

type Props = Pick<ScreenProps, 'title'>;

export function ScreenHeader({title}: Props) {
  return (
    <Box
      flexDirection="row"
      flex={1}
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
    </Box>
  );
}
