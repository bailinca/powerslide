import * as actionTypes from './actionTypes';

export const changeText: any = (text: string) => {
  return {
    type: actionTypes.CHANGE_TEXT,
    text
  };
};
