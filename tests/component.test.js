/* eslint react/jsx-filename-extension: [0] */

import {
  shallow, mount, render, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ImageRow from '../client/src/components/ImageRow';
import ImageGrid from '../client/src/components/ImageGrid';

configure({ adapter: new Adapter() });

describe('Single row of images in "ImageRow.jsx"', () => {
  const wrapperOne = shallow(<ImageRow pair={[]} />);
  it('should exist', () => {
    expect(wrapperOne.exists()).toBeTruthy();
  });

  const wrapperTwo = shallow(<ImageRow pair={['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_4.jpg', 'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_1.jpg']} />);
  it('renders both img children when even number array is passed in', () => {
    expect(wrapperTwo.contains(<div className="image-row" />));
    expect(wrapperTwo.find('img').length).toBe(2);
  });

  const wrapperThree = shallow(<ImageRow pair={['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_4.jpg']} />);
  it('renders only one child img when odd number array is passed in', () => {
    expect(wrapperThree.contains(<div className="image-row" />));
    expect(wrapperThree.find('img').length).toBe(1);
  });

  const wrapperFour = shallow(<ImageRow />);
  it('should use the default props passed in when no "pair" props provided', () => {
    expect(wrapperFour.contains(<div className="image-row" />));
    expect(wrapperFour.find('img').length).toBe(1);
  });
});

describe('Grid of images in "ImageGrid.jsx"', () => {
  const wrapperOne = shallow(<ImageGrid imgs={[]} />);
  it('should exist', () => {
    expect(wrapperOne.exists()).toBeTruthy();
  });

  const images = ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_1.jpg', 'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_2.jpg', 'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_3.jpg', 'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_4.jpg', 'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_5.jpg', 'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_6.jpg'];  
  for (let i = 0; i < images.length; i += 1) {
    const temp = [];
    let pair = [];
    for (let j = 0; j <= i; j += 1) {
      pair.push(images[j]);
      if (j % 2 !== 0 || j === i) {
        temp.push(pair);
        pair = [];
      }
    }
    const wrapper = render(<ImageGrid imgs={temp} />);
    it(`should render ${i + 1} img element(s) when ${i + 1} img links are passed in`, () => {
      expect(wrapper.find('img').length).toBe(i + 1);
    });
  }
});
