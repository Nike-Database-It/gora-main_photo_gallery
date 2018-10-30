import {
  shallow, mount, render, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ImageRow from '../client/src/components/ImageRow';

configure({ adapter: new Adapter() });

describe('Single row of images', () => {
  const wrapper = shallow(<ImageRow pair={[]} />);
  console.log(wrapper);
  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  // it('shuold render without throwing an error', () => {
  //   expect(shallow(wrapper.find).contains(<div className="image-row" />)).toBe(true);
  // });
});
