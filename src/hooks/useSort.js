import { useMemo, useState } from 'react';

export const useSort = (items = []) => {
  const [isDescSort, setIsDescSort] = useState(false);
  const sortedItems = useMemo(() => {
    const sortableItems = [...items];

    sortableItems.sort((a, b) => {
      if (+a.price < +b.price) return isDescSort ? 1 : -1;
      if (+a.price > +b.price) return isDescSort ? -1 : 1;

      return 0;
    });
    return sortableItems;
  }, [items, isDescSort]);
  return {
    isDescSort,
    setIsDescSort,
    sortedItems,
  };
};
