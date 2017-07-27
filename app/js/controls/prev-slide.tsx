import * as React from 'react';

import * as actionTypes from '../actionTypes';

class PrevSlide extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      type: actionTypes.PREV_SLIDE
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component prev-slide"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Previous slide"
        data-balloon-pos="up"
      />
    );
  }
}

export default PrevSlide;
