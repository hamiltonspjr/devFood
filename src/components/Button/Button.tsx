import React from 'react';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPresets} from './buttonPresets';
import {Text} from '../Text/Text';

// 1 definir os presets do botão
export type buttonPreset = 'primary' | 'outline' | 'category';
// 2 criar uma interface com as propriedades do botão extendendo as propriedades do TouchableOpacityBox
interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  preset?: buttonPreset;
  isSelected?: boolean;
}

// 5 criar o componente do botão recebendo as propriedades do ButtonProps
export function Button({
  title,
  preset = 'primary',
  isSelected,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  // pegar os presets com base na escolha recebida
  const buttonPreset = buttonPresets[preset];

  // retornar o componente
  return (
    <TouchableOpacityBox
      paddingHorizontal="s16"
      height={48}
      alignItems="center"
      justifyContent="center"
      borderRadius="s6"
      borderWidth={isSelected && preset === 'category' ? 2 : 0}
      borderColor={isSelected && preset === 'category' ? 'lime300' : undefined}
      {...touchableOpacityBoxProps}
      {...buttonPreset.default.container}>
      <Text
        preset="paragraphMedium"
        medium
        color={buttonPreset.default.content}>
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
