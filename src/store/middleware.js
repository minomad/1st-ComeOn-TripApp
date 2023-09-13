import { produce } from 'immer';

export const immer = (config) => (set, get, api) => {
  return config((fn) => set(produce(fn)), get, api);
};