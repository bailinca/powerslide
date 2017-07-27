import * as React from 'react';
import { connect, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../actions';

class PrevSlide extends React.Component<{}, {}> {
  clickHandler(): void {
    (this.props as any).actions.prevSlide();
  }

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div
        className="component prev-slide"
        onClick={this.clickHandler.bind(this)}
        data-balloon="Previous slide"
        data-balloon-pos="up"
      />
    );
  }
}

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(null, mapDispatchToProps)(PrevSlide);
