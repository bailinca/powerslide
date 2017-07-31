import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';

import { actions } from '../actions';

interface IStateProps {
  slides: ISlide[];
  currentSlideIndex: number;
}

interface IDispatchProps {
  actions: ActionCreatorsMapObject;
}

class Pic extends React.Component<IStateProps & IDispatchProps, {}> {
  changeHandler(e: React.SyntheticEvent<{}>): void {
    this.props.actions.changePic((e.target as HTMLInputElement).value);
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

const mapStateToProps: MapStateToProps<IStateProps, {}> = (state: IAppState) => {
  return {
    currentSlideIndex: state.currentSlideIndex,
    slides: state.slides
  };
};

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (dispatch: Dispatch<IDispatchProps>) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Pic);
