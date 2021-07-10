import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

function StyleSheetContent() {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
    },
    title: {
      fontFamily: theme.fonts.title700,
      color: theme.colors.heading,
      fontSize: 18,
    },
    subtitle: {
      fontFamily: theme.fonts.text400,
      color: theme.colors.highlight,
      fontSize: 13,
    },
  });
}
export default StyleSheetContent;
