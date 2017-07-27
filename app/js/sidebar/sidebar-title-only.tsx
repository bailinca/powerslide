import * as React from 'react';

import * as actionTypes from '../actionTypes';

class SidebarTitleOnly extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      slideType: 'titleOnly',
      type: actionTypes.CHOOSE_SLIDE
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component sidebar-title-only"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Title only"
        data-balloon-pos="up"
      />
    );
  }
}

export default SidebarTitleOnly;
