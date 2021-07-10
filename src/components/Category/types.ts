import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

export interface ICategoryProps extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}
