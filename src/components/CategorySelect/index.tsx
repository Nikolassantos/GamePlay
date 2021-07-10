import React from 'react';
import { View, ScrollView } from 'react-native';
import { categories } from '../../utils/category';
import StyleSheetContent from './styles';
import { ICategorySelectProps } from './types';
import Category from '../Category';

function CategorySelect(props: ICategorySelectProps): JSX.Element {
  const styles = StyleSheetContent();

  const { categorySelected, setCategory } = props;

  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}

export default CategorySelect;
