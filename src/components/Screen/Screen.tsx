import React from 'react';
import {Box, BoxProps} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';
import {IconName} from '../Icon/Icon';
import {ScreenHeader} from './components/ScreenHeader';

export interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  scrollable?: boolean;
  title?: string;
  icon?: IconName;
}

export function Screen({
  children,
  style,
  title,
  icon,
  scrollable = false,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={$backgroundFlex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s20"
          style={[
            {
              paddingTop: top,
              paddingBottom: bottom,
            },
            style,
          ]}
          {...boxProps}>
          <ScreenHeader icon={icon} title={title} />
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const $backgroundFlex: ViewStyle = {
  flex: 1,
};
