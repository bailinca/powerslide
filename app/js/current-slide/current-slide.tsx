import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import TitleText from './title-text';
import TitlePic from './title-pic';
import TitleOnly from './title-only';

interface IProps {
  view: IView;
  slides: ISlide[];
  currentSlideIndex: number;
}

class CurrentSlide extends React.Component<IProps, {}> {
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

const mapStateToProps: MapStateToProps<IAppState, any> = (state: IAppState) => {
  return {
    currentSlideIndex: state.currentSlideIndex,
    slides: state.slides,
    view: state.view
  };
};

export default connect(mapStateToProps)(CurrentSlide);
