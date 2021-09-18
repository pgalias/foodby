import React, { FC } from 'react';
import { Searcher, FiltersProvider, ContentPaneProvider } from './searcher';

export const SearcherView: FC = () => (
  <FiltersProvider>
    <ContentPaneProvider>
      <Searcher />
    </ContentPaneProvider>
  </FiltersProvider>
);
