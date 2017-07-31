import * as React from 'react';

import Title from './Title';
import Pic from './Pic';

class TitlePic extends React.Component<{}, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component title-pic">
        <Title />
        <Pic />
      </div>
    );
  }
}

export default TitlePic;
