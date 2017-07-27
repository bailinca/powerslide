import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class NextSlide extends React.Component<IGenericProps, {}> {
  clickHandler(): void {
    (this.props as any).actions.nextSlide();
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

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(null, mapDispatchToProps)(NextSlide);
