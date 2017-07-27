import * as React from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class Title extends React.Component<IAppState, {}> {
  changeHandler(e: React.SyntheticEvent<{}>): void {
    (this.props as any).actions.changeTitle((e.target as HTMLInputElement).value);
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

const mapStateToProps: MapStateToProps<IAppState, any> = (state: IAppState) => {
  return {
    currentSlideIndex: state.currentSlideIndex,
    slides: state.slides,
    view: state.view
  };
};

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  actions: bindActionCreators(actions as any, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Title);
