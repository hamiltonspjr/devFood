import React from 'react';
import {IconBase} from '../../components/Icon/Icon';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

export function ArrowRightCircle({
  size = 20,
  color = 'white',
  backgroundColor = 'white',
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill={backgroundColor}>
      <G clip-path="url(#clip0_116_628)">
        <Path
          d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 9.99999C18.3334 5.39762 14.6024 1.66666 10 1.66666C5.39765 1.66666 1.66669 5.39762 1.66669 9.99999C1.66669 14.6024 5.39765 18.3333 10 18.3333Z"
          stroke={color}
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 13.3333L13.3333 9.99999L10 6.66666"
          stroke={color}
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.66669 10H13.3334"
          stroke={color}
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_116_628">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
