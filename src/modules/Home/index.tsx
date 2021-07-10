import { createElement, useState } from 'react';
import { IViewProps } from './types';
import Home from './view';

function HomeContainer(): JSX.Element {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string): void {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  const viewProps: IViewProps = {
    handleCategorySelect,
    category,
  };

  return createElement(Home, viewProps);
}

export default HomeContainer;
