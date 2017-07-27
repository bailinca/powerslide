import * as React from 'react';

import Title from './title';
import Text from './text';

class TitleText extends React.Component<IGenericProps, {}> {
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
