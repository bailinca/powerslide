import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../actions';

import SidebarTitleText from './sidebar-title-text';
import SidebarTitlePic from './sidebar-title-pic';
import SidebarTitleOnly from './sidebar-title-only';

class SlideTypeChooser extends React.Component<{}, {}> {
  clickHandler(): void {
    (this.props as any).actions.exitChooseSlide();
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

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(null, mapDispatchToProps)(SlideTypeChooser);
