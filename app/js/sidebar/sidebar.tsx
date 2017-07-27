import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import Controls from '../controls/controls';
import SlideTypeChooser from './slide-type-chooser';

class Sidebar extends React.Component<IAppState, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    const { sidebar } = this.props;

    return (
      <div className="component sidebar">
        {sidebar === 'controls' ? <Controls /> : <SlideTypeChooser />}
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<IAppState, any> = (state: IAppState) => {
  return {
    sidebar: state.sidebar
  };
};

export default connect(mapStateToProps)(Sidebar);
