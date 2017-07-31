import * as React from 'react';

import PresentBtn from './PresentBtn';
import AddSlide from './AddSlide';
import RemoveSlide from './RemoveSlide';
import PrevNext from './PrevNext';

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
