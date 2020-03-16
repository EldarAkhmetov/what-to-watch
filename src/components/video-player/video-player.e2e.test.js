import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoPlayer from './video-player.jsx';

Enzyme.configure({adapter: new Adapter()});

window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };

describe(`Should have play state and can change it`, () => {
  const srcMock = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
  const posterMock = `img/johnny-english.jpg`;

  const tree = mount(<VideoPlayer
    isPlaying={false}
    src={srcMock}
    poster={posterMock}
    properties={{}}
  />);

  it(`Should have play state`, () => {
    expect(tree.state(`isLoading`)).toBe(true);
    expect(tree.state(`isPlaying`)).toBe(false);
  });

  it(`On hover should change isPlaying status after 1 sec`, () => {
    tree.simulate(`mouseEnter`);
    setTimeout(() => {
      expect(tree.state(`isPlaying`)).toBe(true);
    }, 1000);
  });
});


