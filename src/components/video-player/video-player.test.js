import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

it(`VideoPlayer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<VideoPlayer
      isPlaying={false}
      src={`https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}
      properties={{}}
      poster={`img/johnny-english.jpg`}
    />,
    {
      createNodeMock: (element) => {
        if (element.type === `video`) {
          return {
            src: null
          };
        }
        return null;
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
