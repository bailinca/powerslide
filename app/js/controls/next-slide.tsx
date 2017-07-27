import * as React from 'react';

import * as actionTypes from '../actionTypes';

class NextSlide extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      type: actionTypes.NEXT_SLIDE
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component next-slide"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Next slide"
        data-balloon-pos="up"
      />
    );
  }
}

export default NextSlide;
