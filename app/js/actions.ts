import { AnyAction, ActionCreator, ActionCreatorsMapObject } from 'redux';
import * as actionTypes from './actionTypes';

const edit: ActionCreator<AnyAction> = () => {
  return {
    type: actionTypes.EDIT
  };
};

const present: ActionCreator<AnyAction> = () => {
  return {
    type: actionTypes.PRESENT
  };
};

const prevSlide: ActionCreator<AnyAction> = () => {
  return {
    type: actionTypes.PREV_SLIDE
  };
};

const nextSlide: ActionCreator<AnyAction> = () => {
  return {
    type: actionTypes.NEXT_SLIDE
  };
};

const removeSlide: ActionCreator<AnyAction> = () => {
  return {
    type: actionTypes.REMOVE_SLIDE
  };
};

const addSlide: ActionCreator<AnyAction> = () => {
  return {
    type: actionTypes.ADD_SLIDE
  };
};

const chooseSlide: ActionCreator<AnyAction> = (slideType: string) => {
  return {
    type: actionTypes.CHOOSE_SLIDE,
    slideType
  };
};

const exitChooseSlide: ActionCreator<AnyAction> = () => {
  return {
    type: actionTypes.EXIT_CHOOSE_SLIDE
  };
};

const changeTitle: ActionCreator<AnyAction> = (title: string) => {
  return {
    type: actionTypes.CHANGE_TITLE,
    title
  };
};

const changeText: ActionCreator<AnyAction> = (text: string) => {
  return {
    type: actionTypes.CHANGE_TEXT,
    text
  };
};

const changePic: ActionCreator<AnyAction> = (url: string) => {
  return {
    type: actionTypes.CHANGE_PIC,
    url
  };
};

export const actions: ActionCreatorsMapObject = {
  edit,
  present,
  prevSlide,
  nextSlide,
  removeSlide,
  addSlide,
  chooseSlide,
  exitChooseSlide,
  changeTitle,
  changeText,
  changePic
};
