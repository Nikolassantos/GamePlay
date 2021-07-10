import React from 'react';
import { View } from 'react-native';
import StyleSheetContent from './styles';

function Separator(): JSX.Element {
  const styles = StyleSheetContent();

  return <View style={styles.container} />;
}

export default Separator;
