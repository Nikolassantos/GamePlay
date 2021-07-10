import React from 'react';
import { View, Text } from 'react-native';
import Avatar from '../Avatar';
import StyleSheetContent from './styles';
import { IProfileProps } from './types';

function Profile(props: IProfileProps): JSX.Element {
  const styles = StyleSheetContent();

  const {} = props;

  return (
    <View style={styles.container}>
      <Avatar imageUrl="https://github.com/rodrigorgtic.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>

          <Text style={styles.username}>Rodrigo</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
export default Profile;
