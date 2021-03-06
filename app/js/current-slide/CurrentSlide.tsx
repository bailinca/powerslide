import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import TitleText from './TitleText';
import TitlePic from './TitlePic';
import TitleOnly from './TitleOnly';

interface IStateProps {
  view: IView;
  slides: ISlide[];
  currentSlideIndex: number;
}

class CurrentSlide extends React.Component<IStateProps, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    const { slides, view, currentSlideIndex } = this.props;
    const type: string = slides[currentSlideIndex].type;

    return (
      <div className="component current-slide">
        {type === 'titleText' ? <TitleText /> : type === 'titlePic' ? <TitlePic /> : <TitleOnly />}
        {view === 'edit'
          ? <h3>
              {currentSlideIndex + 1 + ' / ' + slides.length}
            </h3>
          : null}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<IStateProps, {}> = (state: IAppState) => {
  return {
    currentSlideIndex: state.currentSlideIndex,
    slides: state.slides,
    view: state.view
  };
};

export default connect(mapStateToProps)(CurrentSlide);
