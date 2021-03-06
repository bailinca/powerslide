import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';

import { actions } from '../actions';

import SidebarTitleText from './SidebarTitleText';
import SidebarTitlePic from './SidebarTitlePic';
import SidebarTitleOnly from './SidebarTitleOnly';

interface IDispatchProps {
  actions: ActionCreatorsMapObject;
}

class SlideTypeChooser extends React.Component<IDispatchProps, {}> {
  clickHandler(): void {
    this.props.actions.exitChooseSlide();
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

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (
  dispatch: Dispatch<IDispatchProps>
) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(SlideTypeChooser);
