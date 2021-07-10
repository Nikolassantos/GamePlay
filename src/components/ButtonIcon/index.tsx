import React from 'react';
import { View, Image, Text } from 'react-native';
import StyleSheetContent from './styles';
import { IButtonIconProps } from './types';
import { RectButton } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';

function ButtonIcon(props: IButtonIconProps): JSX.Element {
  const styles = StyleSheetContent();

  const { title, ...rest } = props;

  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.IconWrapper}>
        <Image source={DiscordImg} style={styles.Icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}

export default ButtonIcon;
