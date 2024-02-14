import React from 'react';
import {IconBase} from '../../components/Icon/Icon';
import {Defs, G, Path, Rect, Svg, ClipPath} from 'react-native-svg';

export function PlusCircle({
  size = 20,
  color = 'white',
  backgroundColor = 'white',
}: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill={backgroundColor}>
      <G clip-path="url(#clip0_116_624)">
        <Path
          d="M9.99999 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 9.99999C18.3333 5.39762 14.6024 1.66666 9.99999 1.66666C5.39762 1.66666 1.66666 5.39762 1.66666 9.99999C1.66666 14.6024 5.39762 18.3333 9.99999 18.3333Z"
          stroke={color}
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10 6.66666V13.3333"
          stroke={color}
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M6.66666 10H13.3333"
          stroke={color}
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_116_624">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
