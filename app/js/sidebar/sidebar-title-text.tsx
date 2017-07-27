import * as React from 'react';

import * as actionTypes from '../actionTypes';

class SidebarTitleText extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      slideType: 'titleText',
      type: actionTypes.CHOOSE_SLIDE
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component sidebar-title-text"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Title and text"
        data-balloon-pos="up"
      />
    );
  }
}

export default SidebarTitleText;
