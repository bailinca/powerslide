import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../actions';

class SidebarTitlePic extends React.Component<{}, {}> {
  clickHandler(): void {
    (this.props as any).actions.chooseSlide('titlePic');
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

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(null, mapDispatchToProps)(SidebarTitlePic);
