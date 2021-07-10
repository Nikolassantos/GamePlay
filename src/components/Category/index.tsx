import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../styles/theme';
import StyleSheetContent from './styles';
import { ICategoryProps } from './types';

function Category(props: ICategoryProps): JSX.Element {
  const styles = StyleSheetContent();

  const { title, icon: Icon, checked, ...rest } = props;

  return (
    <RectButton {...rest} style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}

export default Category;
