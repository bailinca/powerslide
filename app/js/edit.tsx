import * as React from 'react';

import CurrentSlide from './current-slide/current-slide';
import Sidebar from './sidebar/sidebar';

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
