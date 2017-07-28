import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';

import { actions } from '../actions';

interface IDispatchProps {
  actions: ActionCreatorsMapObject;
}

class EditBtn extends React.Component<IDispatchProps, {}> {
  clickHandler(): void {
    this.props.actions.edit();
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component edit-btn"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Edit mode"
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

export default connect(null, mapDispatchToProps)(EditBtn);
