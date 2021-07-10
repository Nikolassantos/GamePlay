import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Image } from 'react-native';
import { theme } from '../../styles/theme';
import StyleSheetContent from './styles';
import { IAvatarProps } from './types';

function Avatar(props: IAvatarProps): JSX.Element {
  const styles = StyleSheetContent();

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary50, theme.colors.secondary70]}
    >
      <Image source={{ uri: props.imageUrl }} style={styles.avatar} />
    </LinearGradient>
  );
}

export default Avatar;
