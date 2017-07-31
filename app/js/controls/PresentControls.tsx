import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import EditBtn from './EditBtn';
import PrevNext from './PrevNext';

interface IStateProps {
  slides: ISlide[];
  currentSlideIndex: number;
}

class PresentControls extends React.Component<IStateProps, {}> {
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

const mapStateToProps: MapStateToProps<IStateProps, {}> = (state: IAppState) => {
  return {
    currentSlideIndex: state.currentSlideIndex,
    slides: state.slides
  };
};

export default connect(mapStateToProps)(PresentControls);
