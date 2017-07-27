import * as React from 'react';

import * as actionTypes from '../actionTypes';

class EditBtn extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      type: actionTypes.EDIT
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component edit-btn"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Edit mode"
        data-balloon-pos="up"
      />
    );
  }
}

export default EditBtn;
