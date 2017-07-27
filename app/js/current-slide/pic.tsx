import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../actions';

class Pic extends React.Component<IAppState, {}> {
  changeHandler(e: React.SyntheticEvent<{}>): void {
    (this.props as any).actions.changePic((e.target as HTMLInputElement).value);
  }

  render(): React.ReactElement<HTMLDivElement> {
    const { slides, currentSlideIndex } = this.props;
    const url: string = slides[currentSlideIndex].url;

    return (
      <div className="component pic" style={{ backgroundImage: `url(${url})` }}>
        <input value={url} onChange={this.changeHandler.bind(this)} placeholder={'...Image url'} />
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

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Pic);
