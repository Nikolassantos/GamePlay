import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import StyleSheetContent from './styles';
import { theme } from '../../styles/theme';
import { IScreenWrapperProps } from './types';

function ScreenWrapper({ children }: IScreenWrapperProps): JSX.Element {
  const styles = StyleSheetContent();

  return (
    <LinearGradient
      style={styles.container}
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
    >
      {children}
    </LinearGradient>
  );
}

export default ScreenWrapper;
