import React from 'react';
import {Box, TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPresets} from './buttonPresets';
import {Text} from '../Text/Text';

export type buttonPreset = 'primary' | 'outline' | 'category';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  preset?: buttonPreset;
  isSelected?: boolean;
  RightComponent?: React.ReactElement;
  LeftComponent?: React.ReactElement;
}

export function Button({
  title,
  preset = 'primary',
  isSelected,
  RightComponent,
  LeftComponent,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset];

  return (
    <TouchableOpacityBox
      paddingHorizontal="s16"
      flexDirection="row"
      height={48}
      alignItems="center"
      justifyContent="center"
      borderRadius="s6"
      borderWidth={isSelected && preset === 'category' ? 2 : 0}
      borderColor={isSelected && preset === 'category' ? 'lime300' : undefined}
      {...touchableOpacityBoxProps}
      {...buttonPreset.default.container}>
      {LeftComponent && <Box marginRight="s8">{LeftComponent}</Box>}
      <Text
        preset="paragraphMedium"
        medium
        color={buttonPreset.default.content}>
        {title}
      </Text>
      {RightComponent && <Box marginLeft="s8">{RightComponent}</Box>}
    </TouchableOpacityBox>
  );
}
