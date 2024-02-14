import React from 'react';
import {Pressable} from 'react-native';
import {ShoppingBag} from '../../assets/icons/ShoppingBag';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ThemeColors} from '../../theme/theme';
import {PlusCircle} from '../../assets/icons/PlusCircle';
import {ArrowRightCircle} from '../../assets/icons/ArrowRightCircle';

export interface IconBase {
  size?: number;
  color?: string;
  backgroundColor?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  backgroundColor?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'slate100',
  size,
  backgroundColor = 'background',
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    <Pressable hitSlop={10} onPress={onPress}>
      <SVGIcon
        color={colors[color]}
        size={size}
        backgroundColor={colors[backgroundColor]}
      />
    </Pressable>;
  }

  return (
    <SVGIcon
      color={colors[color]}
      size={size}
      backgroundColor={colors[backgroundColor]}
    />
  );
}

const iconRegistry = {
  shoppingBag: ShoppingBag,
  plusCircle: PlusCircle,
  arrowRightCircle: ArrowRightCircle,
};

type IconType = typeof iconRegistry;
export type IconName = keyof IconType;
