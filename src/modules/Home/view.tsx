import React, { Fragment } from 'react';
import { FlatList, View, Text } from 'react-native';
import Appointment from '../../components/Appointment';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Profile from '../../components/Profile';
import ScreenWrapper from '../../components/ScreenWrapper';
import Separator from '../../components/Separator';
import StyleSheetContent from './styles';
import { IViewProps } from './types';

function Home(props: IViewProps): JSX.Element {
  const styles = StyleSheetContent();

  const { handleCategorySelect, category } = props;

  const appointments = [
    {
      id: '1',
      guild: { id: '1', name: 'Lendários', icon: null, owner: true },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '1',
      guild: { id: '1', name: 'Lendários', icon: null, owner: true },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  return (
    <ScreenWrapper>
      <Fragment>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <View style={styles.content}>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Separator />}
            renderItem={(item) => (
              <Appointment data={item as any} key={item.index} />
            )}
          />
        </View>
      </Fragment>
    </ScreenWrapper>
  );
}

export default Home;
