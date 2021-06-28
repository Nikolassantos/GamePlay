import { createElement } from 'react';
import StyleSheetContent from './styles';
import { IViewProps } from './types';
import SignIn from './view';

function SignInContainer(): JSX.Element {
  const viewProps: IViewProps = {};

  return createElement(SignIn, viewProps);
}

export default SignInContainer;
