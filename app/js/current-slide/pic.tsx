import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import * as actionTypes from '../actionTypes';

class Pic extends React.Component<IAppState, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  changeHandler(e: React.SyntheticEvent<{}>): void {
    this.context.store.dispatch({
      type: actionTypes.CHANGE_PIC,
      url: (e.target as HTMLInputElement).value
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    const { slides, currentSlide } = this.props;
    const url: string = slides[currentSlide].url;

    return (
      <div className="component pic" style={{ backgroundImage: `url(${url})` }}>
        <input value={url} onChange={this.changeHandler.bind(this)} placeholder={'...Image url'} />
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<IAppState, any> = (state: IAppState) => {
  return {
    currentSlide: state.currentSlide,
    slides: state.slides
  };
};

export default connect(mapStateToProps)(Pic);
