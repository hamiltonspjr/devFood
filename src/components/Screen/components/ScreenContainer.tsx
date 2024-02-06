import React from 'react';
import {ScrollView, View, ViewStyle} from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[$backgroundStyle, {backgroundColor}]}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={[$backgroundStyle, {backgroundColor}]}>{children}</View>;
}

const $backgroundStyle: ViewStyle = {
  flex: 1,
};
