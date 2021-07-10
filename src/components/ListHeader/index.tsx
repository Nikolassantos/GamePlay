import React from 'react';
import { View, Text } from 'react-native';
import StyleSheetContent from './styles';
import { IHeaderProps } from './types';

function ListHeader(props: IHeaderProps): JSX.Element {
  const styles = StyleSheetContent();

  const { title, subtitle } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

export default ListHeader;
