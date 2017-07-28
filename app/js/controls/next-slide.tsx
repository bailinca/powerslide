import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';

import { actions } from '../actions';

interface IDispatchProps {
  actions: ActionCreatorsMapObject;
}

class NextSlide extends React.Component<IDispatchProps, {}> {
  clickHandler(): void {
    this.props.actions.nextSlide();
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component next-slide"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Next slide"
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

export default connect(null, mapDispatchToProps)(NextSlide);
