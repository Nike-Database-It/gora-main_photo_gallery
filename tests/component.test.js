import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ImageRow from '../client/src/components/ImageRow';

configure({ adapter: new Adapter() });

describe('Single row of images', () => {
  it('shuold render without throwing an error', () => {
    expect(shallow(<ImageRow />).contains(<div className="image-row" />)).toBe(true);
  });
});
