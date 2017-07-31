import * as React from 'react';

import CurrentSlide from '../current-slide/CurrentSlide';
import Sidebar from '../sidebar/Sidebar';

class Edit extends React.Component<{}, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component edit">
        <CurrentSlide />
        <Sidebar />
      </div>
    );
  }
}

export default Edit;
