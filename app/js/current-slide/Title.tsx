import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { bindActionCreators, ActionCreatorsMapObject, Dispatch } from 'redux';

import { actions } from '../actions';

interface IStateProps {
  view: IView;
  slides: ISlide[];
  currentSlideIndex: number;
}

interface IDispatchProps {
  actions: ActionCreatorsMapObject;
}

class Title extends React.Component<IStateProps & IDispatchProps, {}> {
  changeHandler(e: React.SyntheticEvent<{}>): void {
    this.props.actions.changeTitle((e.target as HTMLInputElement).value);
  }

  render(): React.ReactElement<HTMLDivElement> {
    const { slides, view, currentSlideIndex } = this.props;

    return (
      <div className="component title">
        <input
          value={slides[currentSlideIndex].title}
          onChange={this.changeHandler.bind(this)}
          disabled={view === 'edit' ? false : true}
        />
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

const mapDispatchToProps: MapDispatchToProps<IDispatchProps, {}> = (
  dispatch: Dispatch<IDispatchProps>
) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);
