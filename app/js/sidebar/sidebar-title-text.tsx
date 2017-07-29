import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';

import { actions } from '../actions';

interface IDispatchProps {
  actions: ActionCreatorsMapObject;
}

class SidebarTitleText extends React.Component<IDispatchProps, {}> {
  clickHandler(): void {
    this.props.actions.chooseSlide('titleText');
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

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (
  dispatch: Dispatch<IDispatchProps>
) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(SidebarTitleText);
