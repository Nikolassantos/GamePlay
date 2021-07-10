import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { categories } from '../../utils/category';
import GuildIcon from '../GuildIcon';
import StyleSheetContent from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { theme } from '../../styles/theme';
import { IAppointmentProps } from './types';

function Appointment(props: IAppointmentProps): JSX.Element {
  const styles = StyleSheetContent();

  const { data, ...rest } = props;

  const { owner } = data.guild;

  const [category] = categories.filter((item) => item.id === data.category);

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.id}</Text>

            <Text style={styles.category}>{'category.title'}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg
                fill={owner ? theme.colors.primary : theme.colors.on}
              />

              <Text
                style={[
                  styles.player,
                  {
                    color: owner ? theme.colors.primary : theme.colors.on,
                  },
                ]}
              >
                {owner ? 'Anfitriao' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
}

export default Appointment;
