import * as actionTypes from './actionTypes';

export const edit: any = () => {
  return {
    type: actionTypes.EDIT
  };
};

export const present: any = () => {
  return {
    type: actionTypes.PRESENT
  };
};

export const prevSlide: any = () => {
  return {
    type: actionTypes.PREV_SLIDE
  };
};

export const nextSlide: any = () => {
  return {
    type: actionTypes.NEXT_SLIDE
  };
};

export const removeSlide: any = () => {
  return {
    type: actionTypes.REMOVE_SLIDE
  };
};

export const addSlide: any = () => {
  return {
    type: actionTypes.ADD_SLIDE
  };
};

export const chooseSlide: any = () => {
  return {
    type: actionTypes.CHOOSE_SLIDE
  };
};

export const exitChooseSlide: any = () => {
  return {
    type: actionTypes.EXIT_CHOOSE_SLIDE
  };
};

export const changeTitle: any = () => {
  return {
    type: actionTypes.CHANGE_TITLE
  };
};

export const changeText: any = (text: string) => {
  return {
    type: actionTypes.CHANGE_TEXT,
    text
  };
};

export const changePic: any = () => {
  return {
    type: actionTypes.CHANGE_PIC
  };
};
