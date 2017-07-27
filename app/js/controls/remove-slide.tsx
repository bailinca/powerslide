import * as React from 'react';

import * as actionTypes from '../actionTypes';

class RemoveSlide extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      type: actionTypes.REMOVE_SLIDE
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component remove-slide"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Remove slide"
        data-balloon-pos="up"
      />
    );
  }
}

export default RemoveSlide;
