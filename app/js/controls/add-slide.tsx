import * as React from 'react';

import * as actionTypes from '../actionTypes';

class AddSlide extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      type: actionTypes.ADD_SLIDE
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component add-slide"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Add slide"
        data-balloon-pos="up"
      />
    );
  }
}

export default AddSlide;
