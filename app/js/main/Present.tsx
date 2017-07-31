import * as React from 'react';

import CurrentSlide from '../current-slide/CurrentSlide';
import PresentControls from '../controls/PresentControls';

class Present extends React.Component<{}, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component present">
        <CurrentSlide />
        <PresentControls />
      </div>
    );
  }
}

export default Present;
