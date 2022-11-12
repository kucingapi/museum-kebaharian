import { Event } from './../api/interface/event/event';
import { Item } from './../api/interface/item/Item';
import { createContext } from 'react';

interface HomeStaticProp {
  events: Event[];
  items: Item[];
}

export const ApiContext = createContext<null | HomeStaticProp>(null);
