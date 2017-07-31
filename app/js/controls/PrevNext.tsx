import * as React from 'react';

import PrevSlide from './PrevSlide';
import NextSlide from './NextSlide';

class PrevNext extends React.Component<{}, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component prev-next">
        <PrevSlide />
        <NextSlide />
      </div>
    );
  }
}

export default PrevNext;
