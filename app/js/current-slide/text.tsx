import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import * as actionTypes from '../actionTypes';

class Text extends React.Component<IAppState, {}> {
  static contextTypes: React.ValidationMap<any> = {
    store: React.PropTypes.object
  };

  changeHandler(e: React.SyntheticEvent<{}>): void {
    this.context.store.dispatch({
      text: (e.target as HTMLInputElement).value,
      type: actionTypes.CHANGE_TEXT
    });
  }

  render(): React.ReactElement<HTMLDivElement> {
    const { slides, view, currentSlide } = this.props;

    return (
      <div className="component text">
        <textarea
          value={slides[currentSlide].text}
          onChange={this.changeHandler.bind(this)}
          disabled={view === 'edit' ? false : true}
        />
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<IAppState, any> = (state: IAppState) => {
  return {
    currentSlide: state.currentSlide,
    slides: state.slides,
    view: state.view
  };
};

export default connect(mapStateToProps)(Text);
