import { Action } from '@reduxjs/toolkit';

let timer: ReturnType<typeof setTimeout> | undefined;
export const debounceFunction = (callback: () => Action, wait: number) => {
  clearTimeout(timer);
  timer = setTimeout(() => callback(), wait);
};

export * from './iterations.utils';
