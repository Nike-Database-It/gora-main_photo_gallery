/* eslint react/jsx-filename-extension: [0] */

import {
  shallow, mount, render, configure,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import ImageRow from '../src/components/ImageRow';
import ImageGrid from '../src/components/ImageGrid';
import Gallery from '../src/components/Gallery';

const sinon = require('sinon');

const mockAxios = require('./__mocks__/axios');

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

  it('should use the default props when no "imgs" are provided', () => {
    const wrapperTwo = render(<ImageGrid />);
    expect(wrapperTwo.find('img').length).toBe(1);
  });
});

describe('Functionality of Main Image Gallery component', () => {
  window.axios = mockAxios;
  const ids = ['310805-408', '310806-408', '310806-002', '305381-113', '852542-306', '554724-062', '554724-113', '554724-071', '554724-610', '554724-050'];

  it('should call componentDidMount when component is mounted', () => {
    sinon.spy(Gallery.prototype, 'componentDidMount');
    for (let i = 0; i < ids.length; i += 1) {
      mount(<Gallery shoeID={ids[i]} />);
      expect(Gallery.prototype.componentDidMount.callCount).toBe(i + 1);
    }
  });

  it('should get shoe information from database on mount', async () => {
    await shallow(<Gallery shoeID={ids[0]} />);
    expect(mockAxios.get.mock.calls.length).toBe(11);
  });
});
