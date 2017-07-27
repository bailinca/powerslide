import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class EditBtn extends React.Component<IGenericProps, {}> {
  clickHandler(): void {
    (this.props as any).actions.edit();
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

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(null, mapDispatchToProps)(EditBtn);
