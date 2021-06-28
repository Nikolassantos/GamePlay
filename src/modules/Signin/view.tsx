import React from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import IlustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import StyleSheetContent from './styles';
import { IViewProps } from './types';

function SignIn(props: IViewProps): JSX.Element {
  const styles = StyleSheetContent();

  const {} = props;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Image
        source={IlustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'} e organize suas{'\n'} jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon activeOpacity={0.7} title="Entrar com Discord" />
      </View>
    </View>
  );
}

export default SignIn;
