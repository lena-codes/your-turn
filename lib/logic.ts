import { ItemType } from '../pages';

export const determineTurn = (items: ItemType[]) => {
  const random = getRandomInt(0, items.length);
  if (items.length > 0) {
    return items[random].name;
  } else {
    return 'Please add names first!';
  }
};

export const removeItem = (id: string, items: ItemType[]): ItemType[] => {
  return items.filter((item) => id !== item.id);
};

export const addItem = (name: string, items: ItemType[]) => {
  return [...items, { id: getRandomId(5), name: name }];
};

const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomId = (length: number): string => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
