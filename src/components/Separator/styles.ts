import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

function StyleSheetContent() {
  return StyleSheet.create({
    container: {
      width: '80%',
      height: 1,
      backgroundColor: theme.colors.secondary40,
      marginVertical: 21,
      alignSelf: 'flex-end',
    },
  });
}

export default StyleSheetContent;
