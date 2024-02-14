import {createText} from '@shopify/restyle';
import React from 'react';
import {TextStyle} from 'react-native';
import {Theme} from '../../theme/theme';

const RNText = createText<Theme>();
type RNTextProps = React.ComponentProps<typeof RNText>;

interface TextProps extends RNTextProps {
  preset?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
  medium?: boolean;
}

export function Text({
  children,
  style,
  preset = 'paragraphSmall',
  bold,
  semiBold,
  medium,
  ...rnTextProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, semiBold, medium);

  return (
    <RNText
      color="slate100"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...rnTextProps}>
      {children}
    </RNText>
  );
}

type TextVariants =
  //| 'caption'
  | 'paragraphSmall'
  | 'paragraphMedium'
  //| 'paragraphLarge'
  | 'subtitleSmall'
  | 'subtitleLarge'
  | 'headingSmall';
//| 'headingMedium'
//| 'headingLarge';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  paragraphSmall: {
    fontSize: 12,
    lineHeight: 16,
  },
  paragraphMedium: {
    fontSize: 16,
    lineHeight: 24,
  },
  subtitleSmall: {
    fontSize: 20,
    lineHeight: 28,
  },
  subtitleLarge: {
    fontSize: 24,
    lineHeight: 32,
  },
  headingSmall: {
    fontSize: 32,
    lineHeight: 40,
  },
};

export const $fontFamily = {
  regular: 'Inter-Regular',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
};

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  semiBold?: boolean,
  medium?: boolean,
) {
  switch (true) {
    case medium:
      return $fontFamily.medium;
    case semiBold:
      return $fontFamily.semiBold;
    case bold:
      return $fontFamily.bold;
    default:
      return $fontFamily.regular;
  }
}
