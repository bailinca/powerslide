import { ActionCreator, ActionCreatorsMapObject } from 'redux';
import * as actionTypes from './actionTypes';

const edit: ActionCreator<any> = () => {
  return {
    type: actionTypes.EDIT
  };
};

const present: ActionCreator<any> = () => {
  return {
    type: actionTypes.PRESENT
  };
};

const prevSlide: ActionCreator<any> = () => {
  return {
    type: actionTypes.PREV_SLIDE
  };
};

const nextSlide: ActionCreator<any> = () => {
  return {
    type: actionTypes.NEXT_SLIDE
  };
};

const removeSlide: ActionCreator<any> = () => {
  return {
    type: actionTypes.REMOVE_SLIDE
  };
};

const addSlide: ActionCreator<any> = () => {
  return {
    type: actionTypes.ADD_SLIDE
  };
};

const chooseSlide: ActionCreator<any> = (slideType: string) => {
  return {
    type: actionTypes.CHOOSE_SLIDE,
    slideType
  };
};

const exitChooseSlide: ActionCreator<any> = () => {
  return {
    type: actionTypes.EXIT_CHOOSE_SLIDE
  };
};

const changeTitle: ActionCreator<any> = (title: string) => {
  return {
    type: actionTypes.CHANGE_TITLE,
    title
  };
};

const changeText: ActionCreator<any> = (text: string) => {
  return {
    type: actionTypes.CHANGE_TEXT,
    text
  };
};

const changePic: ActionCreator<any> = (url: string) => {
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
