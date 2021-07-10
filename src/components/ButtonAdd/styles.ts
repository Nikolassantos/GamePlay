import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

function StyleSheetContent() {
  return StyleSheet.create({
    container: {
      height: 48,
      width: 48,
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
export default StyleSheetContent;
