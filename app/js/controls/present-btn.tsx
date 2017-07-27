import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class PresentBtn extends React.Component<IGenericProps, {}> {
  clickHandler(): void {
    (this.props as any).actions.present();
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component present-btn"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Present mode"
        data-balloon-pos="up"
      />
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(null, mapDispatchToProps)(PresentBtn);
