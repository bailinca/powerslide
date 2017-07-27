import * as React from 'react';

import PresentBtn from './present-btn';
import AddSlide from './add-slide';
import RemoveSlide from './remove-slide';
import PrevNext from './prev-next';

class Controls extends React.Component<{}, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component controls">
        <PresentBtn />
        <AddSlide />
        <RemoveSlide />
        <PrevNext />
      </div>
    );
  }
}

export default Controls;
