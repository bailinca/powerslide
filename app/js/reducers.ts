import { AnyAction, Reducer } from 'redux';

import { defaultState } from './defaultState';
import * as actionTypes from './actionTypes';

const reducer: Reducer<IAppState> = (
  currentState: IAppState = defaultState,
  action: AnyAction
): IAppState => {
  let slides: ISlide[];

  switch (action.type) {
    case actionTypes.EDIT:
      currentState = Object.assign({}, currentState, {
        view: 'edit'
      });
      break;

    case actionTypes.PRESENT:
      currentState = Object.assign({}, currentState, {
        view: 'present'
      });
      break;

    case actionTypes.PREV_SLIDE:
      if (currentState.currentSlideIndex > 0) {
        currentState = Object.assign({}, currentState, {
          currentSlideIndex: currentState.currentSlideIndex - 1
        });
      }
      break;

    case actionTypes.NEXT_SLIDE:
      if (currentState.currentSlideIndex < currentState.slides.length - 1) {
        currentState = Object.assign({}, currentState, {
          currentSlideIndex: currentState.currentSlideIndex + 1
        });
      }
      break;

    case actionTypes.REMOVE_SLIDE:
      if (currentState.slides.length > 1) {
        slides = Array(...currentState.slides);
        slides.splice(currentState.currentSlideIndex, 1);
        currentState = Object.assign({}, currentState, {
          currentSlideIndex:
            slides.length === currentState.currentSlideIndex
              ? currentState.currentSlideIndex - 1
              : currentState.currentSlideIndex,
          slides
        });
      }
      break;

    case actionTypes.ADD_SLIDE:
      currentState = Object.assign({}, currentState, {
        sidebar: 'slideTypeChooser'
      });
      break;

    case actionTypes.CHOOSE_SLIDE:
      slides = Array(...currentState.slides);
      slides.splice(currentState.currentSlideIndex + 1, null, {
        text: '',
        title: '',
        type: action.slideType,
        url: ''
      });
      currentState = Object.assign({}, currentState, {
        currentSlideIndex: currentState.currentSlideIndex + 1,
        slides
      });
      break;

    case actionTypes.EXIT_CHOOSE_SLIDE:
      currentState = Object.assign({}, currentState, {
        sidebar: 'controls'
      });
      break;

    case actionTypes.CHANGE_PIC:
      slides = Array(...currentState.slides);
      slides[currentState.currentSlideIndex].url = action.url;
      currentState = Object.assign({}, currentState, {
        slides
      });
      break;

    case actionTypes.CHANGE_TEXT:
      slides = Array(...currentState.slides);
      slides[currentState.currentSlideIndex].text = action.text;
      currentState = Object.assign({}, currentState, {
        slides
      });
      break;

    case actionTypes.CHANGE_TITLE:
      slides = Array(...currentState.slides);
      slides[currentState.currentSlideIndex].title = action.title;
      currentState = Object.assign({}, currentState, {
        slides
      });
      break;
    default:
  }
  localStorage.setItem('state', JSON.stringify(currentState));
  return currentState;
};

export default reducer;
