import React from 'react';
import { View, Image, Text } from 'react-native';
import IlustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import ScreenWrapper from '../../components/ScreenWrapper';
import StyleSheetContent from './styles';
import { IViewProps } from './types';

function SignIn(props: IViewProps): JSX.Element {
  const styles = StyleSheetContent();

  const { handleSignIn } = props;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
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
          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default SignIn;
