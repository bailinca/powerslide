import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../actions';

class AddSlide extends React.Component<{}, {}> {
  clickHandler(): void {
    (this.props as any).actions.addSlide();
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component add-slide"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Add slide"
        data-balloon-pos="up"
      />
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(null, mapDispatchToProps)(AddSlide);
