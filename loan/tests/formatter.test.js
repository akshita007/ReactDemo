import React from 'react';
import renderer from 'react-test-renderer';

import formatter from '..\src\component\formatter.js';

describe('<formatter />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<formatter />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });