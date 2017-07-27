import * as React from 'react';

import * as actionTypes from '../actionTypes';

class SidebarTitlePic extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      slideType: 'titlePic',
      type: actionTypes.CHOOSE_SLIDE
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component sidebar-title-pic"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Title and picture"
        data-balloon-pos="up"
      />
    );
  }
}

export default SidebarTitlePic;
