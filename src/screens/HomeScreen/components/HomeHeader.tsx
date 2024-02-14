import React from 'react';
import {Box, TouchableOpacityBox} from '../../../components/Box/Box';
import {useNavigation} from '@react-navigation/native';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {SimpleLogo} from '../../../brand/SimpleLogo';

interface HomeHeaderProps {
  title: string;
  cartQuantityItems: number;
}

export function HomeHeader({cartQuantityItems, title}: HomeHeaderProps) {
  const navigation = useNavigation();

  function handleCartScreen() {
    navigation.navigate('CartScreen');
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      borderBottomWidth={1}
      borderBottomColor="slate700"
      pb="s20"
      mb="s20">
      <Box>
        <SimpleLogo />
        <Text preset="subtitleSmall" semiBold mt="s8">
          {title}
        </Text>
      </Box>
      <TouchableOpacityBox alignItems="center" onPress={handleCartScreen}>
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
        <Icon name="shoppingBag" size={24} />
      </TouchableOpacityBox>
    </Box>
  );
}
