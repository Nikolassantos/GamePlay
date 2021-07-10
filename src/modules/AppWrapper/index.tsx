import React from 'react';
import { StatusBar, View } from 'react-native';
import StyleSheetContent from './styles';
import IProps from './types';

function AppWrapper({ children }: IProps): JSX.Element {
  const styles = StyleSheetContent();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {children}
    </View>
  );
}

export default AppWrapper;
