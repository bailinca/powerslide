import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import EditBtn from './edit-btn';
import PrevNext from './prev-next';

class PresentControls extends React.Component<IAppState, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    const { slides, currentSlideIndex } = this.props;

    return (
      <div className="component present-controls">
        {currentSlideIndex + 1 + ' / ' + slides.length}
        <PrevNext />
        <EditBtn />
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<IAppState, any> = (state: IAppState) => {
  return {
    currentSlideIndex: state.currentSlideIndex,
    slides: state.slides
  };
};

export default connect(mapStateToProps)(PresentControls);
