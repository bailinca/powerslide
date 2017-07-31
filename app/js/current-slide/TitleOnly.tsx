import * as React from 'react';

import Title from './Title';

class TitleOnly extends React.Component<{}, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component title-only">
        <Title />
      </div>
    );
  }
}

export default TitleOnly;
