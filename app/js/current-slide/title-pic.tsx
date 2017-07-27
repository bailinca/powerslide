import * as React from 'react';

import Title from './title';
import Pic from './pic';

class TitlePic extends React.Component<IGenericProps, {}> {
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
