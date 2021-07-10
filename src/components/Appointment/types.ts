import { RectButtonProps } from 'react-native-gesture-handler';

export interface IAppointmentProps {
  data: AppointmentProps;
}

interface IGuildProps {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
}

interface AppointmentProps extends RectButtonProps {
  id: string;
  guild: IGuildProps;
  category: string;
  date: string;
  description: string;
}
