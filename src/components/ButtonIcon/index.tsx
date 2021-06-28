import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import StyleSheetContent from './styles';
import { IButtonIconProps } from './types';

import DiscordImg from '../../assets/discord.png';

function ButtonIcon(props: IButtonIconProps): JSX.Element {
  const styles = StyleSheetContent();

  const { title, ...rest } = props;

  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <View style={styles.IconWrapper}>
        <Image source={DiscordImg} style={styles.Icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonIcon;
