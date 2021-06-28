import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

function StyleSheetContent() {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: 56,
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      flex: 1,
      color: theme.colors.heading,
      fontSize: 15,
      textAlign: 'center',
    },
    IconWrapper: {
      width: 56,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderColor: theme.colors.line,
    },
    Icon: {
      width: 24,
      height: 18,
    },
  });
}
export default StyleSheetContent;
