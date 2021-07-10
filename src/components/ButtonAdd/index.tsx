import React from 'react';
import StyleSheetContent from './styles';
import { IButtonAddProps } from './types';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

function ButtonAdd(props: IButtonAddProps): JSX.Element {
  const styles = StyleSheetContent();

  const { ...rest } = props;

  return (
    <RectButton {...rest} style={styles.container}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  );
}
export default ButtonAdd;
