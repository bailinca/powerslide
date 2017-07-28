import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';

import { actions } from '../actions';

interface IDispatchProps {
  actions: ActionCreatorsMapObject;
}

class SidebarTitleOnly extends React.Component<IDispatchProps, {}> {
  clickHandler(): void {
    this.props.actions.chooseSlide('titleOnly');
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

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (
  dispatch: Dispatch<IDispatchProps>
) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(SidebarTitleOnly);
