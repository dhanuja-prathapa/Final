// components/itemsPerPage.tsx
import { useEffect, useState } from 'react';
import useMediaQueries from './useMediaQueries';

const getItemsPerPage = (screenSize: string) => {
  switch (screenSize) {
    case 'small':
      return 2;
    case 'medium':
      return 4;
    case 'large':
      return 6;
    default:
      return 8;
  }
};

export default getItemsPerPage;