import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import Header from './header';
import Edit from './edit';
import Present from './present';

class App extends React.Component<any, IAppState> {
  static propTypes: React.ValidationMap<any> = {
    view: React.PropTypes.string
  };

  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component app">
        {this.props.view === 'edit' ? <Header /> : null}
        {this.props.view === 'edit' ? <Edit /> : <Present />}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<IAppState, any> = (state: IAppState) => ({
  view: state.view
});

export default connect(mapStateToProps)(App);
