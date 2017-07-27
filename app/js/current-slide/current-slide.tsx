import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import TitleText from './title-text';
import TitlePic from './title-pic';
import TitleOnly from './title-only';

class CurrentSlide extends React.Component<IAppState, {}> {
  static propTypes: React.ValidationMap<any> = {
    currentSlide: React.PropTypes.number,
    slides: React.PropTypes.array,
    view: React.PropTypes.string
  };

  render(): React.ReactElement<HTMLDivElement> {
    const { slides, view, currentSlide } = this.props;
    const type: string = slides[currentSlide].type;

    return (
      <div className="component current-slide">
        {type === 'titleText' ? <TitleText /> : type === 'titlePic' ? <TitlePic /> : <TitleOnly />}
        {view === 'edit'
          ? <h3>
              {currentSlide + 1 + ' / ' + slides.length}
            </h3>
          : null}
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

export default connect(mapStateToProps)(CurrentSlide);
