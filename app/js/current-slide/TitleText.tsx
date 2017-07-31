import * as React from 'react';

import Title from './Title';
import Text from './Text';

class TitleText extends React.Component<{}, {}> {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div className="component title-text">
        <Title />
        <Text />
      </div>
    );
  }
}

export default TitleText;
