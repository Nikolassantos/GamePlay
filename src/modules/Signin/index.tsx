import { useNavigation } from '@react-navigation/native';
import { createElement } from 'react';
import StyleSheetContent from './styles';
import { IViewProps } from './types';
import SignIn from './view';

import { routesEnum } from '../../routes/routesEnum';

function SignInContainer(): JSX.Element {
  const navigation = useNavigation();

  function handleSignIn(): void {
    navigation.navigate(routesEnum.Home);
  }

  const viewProps: IViewProps = {
    handleSignIn,
  };

  return createElement(SignIn, viewProps);
}

export default SignInContainer;
