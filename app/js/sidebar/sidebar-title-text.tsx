import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class SidebarTitleText extends React.Component<IGenericProps, {}> {
  clickHandler(): void {
    (this.props as any).actions.chooseSlide('titleText');
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

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(null, mapDispatchToProps)(SidebarTitleText);
