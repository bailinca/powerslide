import * as React from 'react';

import * as actionTypes from '../actionTypes';

import SidebarTitleText from './sidebar-title-text';
import SidebarTitlePic from './sidebar-title-pic';
import SidebarTitleOnly from './sidebar-title-only';

class SlideTypeChooser extends React.Component<IGenericProps, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  clickHandler(): void {
    this.context.store.dispatch({
      type: actionTypes.EXIT_CHOOSE_SLIDE
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component slide-type-chooser" onClick={this.clickHandler.bind(this)}>
        <SidebarTitleText />
        <SidebarTitlePic />
        <SidebarTitleOnly />
      </div>
    );
  }
}

export default SlideTypeChooser;
