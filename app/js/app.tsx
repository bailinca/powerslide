import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import Header from './header';
import Edit from './edit';
import Present from './present';

interface IStateProps {
  view: IView;
}

class App extends React.Component<IStateProps, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component app">
        {this.props.view === 'edit' ? <Header /> : null}
        {this.props.view === 'edit' ? <Edit /> : <Present />}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<IStateProps, {}> = (state: IAppState) => ({
  view: state.view
});

export default connect(mapStateToProps)(App);
