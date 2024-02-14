import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {useAppTheme} from '../../hooks/useAppTheme';
import {$fontFamily, $fontSizes} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  boxProps?: BoxProps;
}

export function TextInput({boxProps, ...rnTextInputProps}: TextInputProps) {
  const {colors} = useAppTheme();
  const textInputContainer: BoxProps = {
    borderRadius: 's6',
    backgroundColor: 'slate800',
    paddingHorizontal: 's16',
    pt: 's12',
    height: 120,
  };

  const inputRef = useRef<RNTextInput>(null);
  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Box {...textInputContainer}>
          <RNTextInput
            autoCapitalize="none"
            placeholderTextColor={colors.slate400}
            style={[$textInputStyle, {color: colors.slate100}]}
            multiline
            {...rnTextInputProps}
          />
        </Box>
      </Pressable>
    </Box>
  );
}

export const $textInputStyle: TextStyle = {
  padding: 0,
  flexShrink: 1,
  flexGrow: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphSmall,
  textAlignVertical: 'top',
};
