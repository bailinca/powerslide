import * as React from 'react';

import * as actionTypes from '../actionTypes';

class PresentBtn extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      type: actionTypes.PRESENT
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component present-btn"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Present mode"
        data-balloon-pos="up"
      />
    );
  }
}

export default PresentBtn;
