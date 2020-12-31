import { createContext } from 'react';
import initialState from './initialState';

export const GlobalStateContext = createContext(initialState);