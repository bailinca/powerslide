import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class SidebarTitleOnly extends React.Component<IGenericProps, {}> {
  clickHandler(): void {
    (this.props as any).actions.chooseSlide('titleOnly');
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

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(null, mapDispatchToProps)(SidebarTitleOnly);
