import { createContext } from "react";
import type { IContextType } from './SearchContext.type';

const DEFAULTSTATE: IContextType = {
  users: [],
  setUsers: () => []
}

const SearchContext = createContext<IContextType>(DEFAULTSTATE);

export { DEFAULTSTATE, SearchContext }
