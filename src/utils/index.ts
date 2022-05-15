import { Action } from '@reduxjs/toolkit';

let timer: ReturnType<typeof setTimeout> | undefined;
export const debounceFunction = (callback: () => Action, wait: number) => {
  clearTimeout(timer);
  timer = setTimeout(() => callback(), wait || 500);
};

export * from './iterations.utils';
