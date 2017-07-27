import * as React from 'react';

import PrevSlide from './prev-slide';
import NextSlide from './next-slide';

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
